# UPI-QR-Generator
<br>
<div align="center">
<img src="https://img.shields.io/badge/version-v1.1-orange"> <img src="https://img.shields.io/badge/release-stable-gree"> <a href="https://hits.sh/github.com/powercomp750/"><img alt="Hits" src="https://hits.sh/github.com/powercomp750.svg"/></a> <img src="https://img.shields.io/badge/made_with-❤-red"> <a href="https://github.com/powercomp750/UPI-QR-Generator/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-red.svg"/></a> <a href="https://upi-qrcode-generator.netlify.app/"><img src="https://api.netlify.com/api/v1/badges/7301ef91-1f5d-49a4-82c5-f53cb7f89360/deploy-status"/></a>
</div>
<br>

Dynamic QR Code generator for UPI payments designed in glassmorphism UI

Simply enter your UPI details and amount to be received in input fields and scan the qr code that's being generated as soon as you finish typing.

![image](https://github.com/powercomp750/UPI-QR-Generator/assets/157834603/d302b682-946e-447b-a372-053eaf1ef2a0)

## ✨Features
* Generate QR code in seconds.
* Beautiful glassmorphism UI.
* Along with generating, users can download that qrcode on their devices.
* Pay directly using your own UPI app by click of button.
* Automatic generation of QR Code. Just type and finish it.
* Entered input fields are automatically saved on exit and are restored on next browser session.
* No ADs or hidden trackers.
* Apache-2.0 License

## ⚙️Runtime
* Simply visit this site: [![Demo](https://img.shields.io/badge/Demo-LIVE-blue)](https://upi-qrcode-generator.netlify.app/)

or
* Clone the repository to your local machine.
  
  ```
  git clone https://github.com/powercomp750/UPI-QR-Generator
  ```

* Navigate to the Project Directory:

  ```
  cd UPI-QR-Generator
  ```

* Run locally by launching <code>index.html</code>
  
## ⚡Usage
Enter your all details in left panel. This includes:
* **Merchant/Payee Name** - Your name to be displayed when others scan your QR code.
* **UPI ID/VPA** - VPA stands for Virtual Payment Address. This is unique header, which will allow you to receive transferred money in your bank account. So enter this field correctly.
* **Amount to be receive** - Your total amount that you want to receive. If you leave this empty, amount will editable and will have to enter amount during payement process.
* **Description** - Just notes or short description. 
* **Site URL** - If your payment requires displaying bill or invoice which is stored online, you can enter that URL and it will be displayed to user who is paying you.

On right panel, you see 3 elements:
* **QR Code** - That's the main thing. Scanning with entering no details, causes UPI app to close unexpectedly, because it's a blank URL with no details/parameters.
* **Download QR Code** - Download QR Code directly in your browser and save it offline on your device.
* **Pay though UPI** - Initiate payment directly using your own UPI app on your device.

> [!Tip]  
> UPI transactions work across all over India.<br>
> For International payments, they currently are supported in **Bhutan, France, Mauritius, Nepal, Singapore, Sri Lanka and UAE**.<br>
> UPI is expanding across many countries and we can expect more countries to accept payements.<br>
> More details are provided [here](https://www.npci.org.in/what-we-do/upi-global/upi-global-acceptance/live-members).

## 📂Codebase
Entire project is coded in HTML5, CSS and plain JavaScript. 
External resources used are:
* Google font
* QR Code generating library CDN
* All images in image folder

This project is deployed using [Netlify](https://www.netlify.com/)

## 🔒Privacy
The details you entered in input fields are saved locally in your browser i.e. using localStorage api, nothing is saved online, **your data is fully secured and safe**.

If you still have doubt, you can review the source code which is included in this repository.

## 🤝Contributions
Your contributions are welcome! If you find any issues or want to add enhancements, feel free to submit a pull request.

## 📝License
This project is licensed under the <a href="https://github.com/powercomp750/UPI-QR-Generator/blob/main/LICENSE">Apache-2.0 License</a>
