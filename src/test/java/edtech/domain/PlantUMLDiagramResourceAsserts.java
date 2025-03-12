package edtech.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class PlantUMLDiagramResourceAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPlantUMLDiagramResourceAllPropertiesEquals(PlantUMLDiagramResource expected, PlantUMLDiagramResource actual) {
        assertPlantUMLDiagramResourceAutoGeneratedPropertiesEquals(expected, actual);
        assertPlantUMLDiagramResourceAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPlantUMLDiagramResourceAllUpdatablePropertiesEquals(
        PlantUMLDiagramResource expected,
        PlantUMLDiagramResource actual
    ) {
        assertPlantUMLDiagramResourceUpdatableFieldsEquals(expected, actual);
        assertPlantUMLDiagramResourceUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPlantUMLDiagramResourceAutoGeneratedPropertiesEquals(
        PlantUMLDiagramResource expected,
        PlantUMLDiagramResource actual
    ) {
        assertThat(actual)
            .as("Verify PlantUMLDiagramResource auto generated properties")
            .satisfies(a -> assertThat(a.getId()).as("check id").isEqualTo(expected.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPlantUMLDiagramResourceUpdatableFieldsEquals(
        PlantUMLDiagramResource expected,
        PlantUMLDiagramResource actual
    ) {
        assertThat(actual)
            .as("Verify PlantUMLDiagramResource relevant properties")
            .satisfies(a -> assertThat(a.getType()).as("check type").isEqualTo(expected.getType()))
            .satisfies(a -> assertThat(a.getUri()).as("check uri").isEqualTo(expected.getUri()))
            .satisfies(a -> assertThat(a.getUmlCode()).as("check umlCode").isEqualTo(expected.getUmlCode()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPlantUMLDiagramResourceUpdatableRelationshipsEquals(
        PlantUMLDiagramResource expected,
        PlantUMLDiagramResource actual
    ) {
        assertThat(actual)
            .as("Verify PlantUMLDiagramResource relationships")
            .satisfies(a -> assertThat(a.getAsciidocSlide()).as("check asciidocSlide").isEqualTo(expected.getAsciidocSlide()));
    }
}
