
$(document).ready(function () {

    load_json_data('Country');

    function load_json_data(id) {
        $('#Country').html('<option disabled class="dropdown-item"  selected value="">---Select Country---</option>');
        var jqxhr = $.getJSON("../Content/JsonFile/countries.json", function (data) {

            $.each(data, function (key, value) {
                $('#Country').html($('#Country').html() + '<option class="dropdown-item" value="' + value.id + '">' + value.name + '</option>');
            });
        });
    }
    $(document).on('change', '#Country', function () {
        $('#State').html('<option class="dropdown-item" disabled selected value="">---Select your State---</option>');
        var Country_id = $(this).val();
        if (Country_id != '') {
            var jqxhr1 = $.getJSON("../Content/JsonFile/states.json", function (data) {

                $.each(data, function (key, value) {
                    if (value.country_id == Country_id) {
                       
                        $('#State').html($('#State').html() + '<option class="dropdown-item" value="' + value.state_code + '">' + value.name + '</option>');
                    }
                });
            });
        }
        else {
            $('#State').html('<option class="dropdown-item" value="">Select state</option>');
        }
    });
    $(document).on('change', '#State', function () {
        $('#City').html('<option disabled class="dropdown-item" selected value="">---Select your City---</option>');
        var state_code = $(this).val();
        console.log(state_code);
        //$('#City').html($('#City').html() + '<option ></option>');
        if (state_code != '') {
            var jqxhr1 = $.getJSON("../Content/JsonFile/cities.json", function (data) {
                $.each(data, function (key, value) {
                    if (value.state_code == state_code) {
                        $('#City').html($('#City').html() + '<option class="dropdown-item" value="' + value.id + '">' + value.name + '</option>');
                    }

                });
            });
        }
        else {
            $('#City').html('<option value="">Select city</option>');
        }
    });
});