import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform, ToastController, AlertController, LoadingController, Loading } from 'ionic-angular';
import moment from 'moment';

@Injectable()
export class UtilProvider {

  constructor(
    private storage: Storage,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private platform: Platform
  ) {

  }

  showToast(message: string, position?: string, timeout?: number) {
    let t = 5000;

    if (timeout)
      t = timeout;

    let toast = this.toastCtrl.create({
      message: message,
      duration: t
    });
    toast.present();
  }

  getLoading(loadingCtrl: LoadingController, message?: string) {
    let msg = 'Please Wait...';
    if (message) {
      msg = message;
    }

    return loadingCtrl.create({ content: msg });
  }

  loadDismiss(loader: Loading) {
    if (loader) {
      loader.dismiss();
    }
  }

  showAlert(title: string, message: string, btnText?: string) {
    let label = 'OK';

    let promise = new Promise((resolve, reject) => {
      if (btnText && btnText.trim.length > 0) {
        label = btnText;
      }

      let alert = this.alertCtrl.create({
        title: title,
        message: message,
        buttons: [{
          text: label,
          handler: () => { resolve(true); }
        }]
      });
      alert.present();
    });
    return promise;
  }

  showAlertError(title: string, subTitle: string, btnText?: string) {
    let label = 'OK';
    let tit = 'Error';

    if (btnText && btnText.trim.length > 0) {
      label = btnText;
    }

    if (title) {
      tit = title;
    }

    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: subTitle,
      buttons: [label]
    });
    alert.present();
  }


  showConfirm(
    title: string,
    message: string,
    btnOKLabel?: string,
    btnCancelLabel?: string) {

    let promise = new Promise((resolve, reject) => {
      let btnOk = 'OK';
      let btnCancel = 'Cancel';

      if (btnOKLabel)
        btnOk = btnOKLabel;

      if (btnCancelLabel)
        btnCancel = btnCancelLabel;

      let confirm = this.alertCtrl.create({
        title: title,
        message: message,
        buttons: [
          {
            text: btnOk,
            handler: () => { resolve(true) }
          },
          {
            text: btnCancel,
            role: 'cancel',
            handler: () => { reject(false) }
          }
        ]
      });
      confirm.present();
    });
    return promise;
  }

  setStorage(key: string, val: any) {
    this.storage.set(key, val);
  }

  getStorage(key: string) {
    return this.storage.get(key);
  }

  removeDuplicate(arr) {
    let unique_array = arr.filter(function (elem, index, self) {
      return index == self.indexOf(elem);
    });
    return unique_array
  }

  isMobile() {
    return this.platform.is('ios') || this.platform.is('android');
  }

  isIos() {
    return this.platform.is('ios');
  }

  isAndroid() {
    return this.platform.is('android');
  }

  getPlatform(): string {
    if (this.platform.is('ios')) {
      return 'ios';
    }

    if (this.platform.is('android')) {
      return 'android';
    }

    return undefined;
  }

  now(sdate?: string) {
    if (sdate) {
      return moment(sdate);
    }
    return moment();
  }

  cleanPhone(phone: string) {
    let a = phone.toLowerCase();
    a = a.replace(' ', '');
    a = a.replace('-', '');
    a = a.replace('+', '');
    a = a.replace('(', '');
    a = a.replace(')', '');

    return a;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
