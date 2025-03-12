import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { Translate, ValidatedField, ValidatedForm, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities as getAsciidocSlides } from 'app/entities/asciidoc-slide/asciidoc-slide.reducer';
import { DocumentResourceType } from 'app/shared/model/enumerations/document-resource-type.model';
import { createEntity, getEntity, reset, updateEntity } from './image-resource.reducer';

export const ImageResourceUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const asciidocSlides = useAppSelector(state => state.asciidocSlide.entities);
  const imageResourceEntity = useAppSelector(state => state.imageResource.entity);
  const loading = useAppSelector(state => state.imageResource.loading);
  const updating = useAppSelector(state => state.imageResource.updating);
  const updateSuccess = useAppSelector(state => state.imageResource.updateSuccess);
  const documentResourceTypeValues = Object.keys(DocumentResourceType);

  const handleClose = () => {
    navigate(`/image-resource${location.search}`);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getAsciidocSlides({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }

    const entity = {
      ...imageResourceEntity,
      ...values,
      asciidocSlide: asciidocSlides.find(it => it.id.toString() === values.asciidocSlide?.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          type: 'IMAGE',
          ...imageResourceEntity,
          asciidocSlide: imageResourceEntity?.asciidocSlide?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="edsterApp.imageResource.home.createOrEditLabel" data-cy="ImageResourceCreateUpdateHeading">
            <Translate contentKey="edsterApp.imageResource.home.createOrEditLabel">Create or edit a ImageResource</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="image-resource-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('edsterApp.imageResource.type')}
                id="image-resource-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {documentResourceTypeValues.map(documentResourceType => (
                  <option value={documentResourceType} key={documentResourceType}>
                    {translate(`edsterApp.DocumentResourceType.${documentResourceType}`)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('edsterApp.imageResource.uri')}
                id="image-resource-uri"
                name="uri"
                data-cy="uri"
                type="text"
              />
              <ValidatedField
                label={translate('edsterApp.imageResource.resolution')}
                id="image-resource-resolution"
                name="resolution"
                data-cy="resolution"
                type="text"
              />
              <ValidatedField
                id="image-resource-asciidocSlide"
                name="asciidocSlide"
                data-cy="asciidocSlide"
                label={translate('edsterApp.imageResource.asciidocSlide')}
                type="select"
              >
                <option value="" key="0" />
                {asciidocSlides
                  ? asciidocSlides.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/image-resource" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ImageResourceUpdate;
