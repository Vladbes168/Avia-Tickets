import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

// Obj


//Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem)
}

// Init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');

M.Autocomplete.init(autocomplete, {
    data: {
        'Kiev': null,
        'Lviv': null
    }
});


export function getAutocompleteInstance(elem) {
   return M.Autocomplete.getInstance(elem)
}

// Init datepickers
const datePicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datePicker, {
    showClearBtn: true,
});

export function getDatePickerInstance(elem) {
    return M.Datepicker.getInstance(elem)
 }