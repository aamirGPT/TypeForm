function validateAlphabeticInput(input) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
}
