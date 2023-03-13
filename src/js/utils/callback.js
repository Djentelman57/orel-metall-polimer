import $ from "jquery";
import Alert from "../ui/Alert";
import { Modal } from 'bootstrap';

$(function () {
    const $successCallbackModal = new Modal(document.querySelector('#modalCallbackSuccess'));
    window.onRequestCallbackSuccess = () => {
        $successCallbackModal.show();
    };

    // const $callbackModal = new Modal(document.querySelector('#callback-modal'));
    //
    // $('.app-show-callback-modal').on('click', function (e) {
    //     e.preventDefault();
    //     $callbackModal.show();
    // });
    //
    // window.callbackSuccess = () => {
    //     Alert.success('Ваша заявка успешно отправлена');
    //     $('.app-callback-form-modal')[0].reset();
    //     $('#callbackModal_forms_flash').html('');
    //     $callbackModal.hide();
    // };
});
