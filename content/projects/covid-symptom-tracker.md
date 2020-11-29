---
slug: "/projects/covid-symptom-tracker"
project_title: COVID Symptom Tracker
project_photos:
- "/content/images/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg"
live_project_link: http://symptomkiosk.netlify.app/
project_github_repo: http://www.github.com/apmcknight/covid-symptom-kiosk
excerpt: The Symptom Kiosk is a easy to use, self-help kiosk designed to provide clear
  instructions. If they are clear to come into the building, they'll see a clear mark
  show up. If they aren't feeling well, or have a temperature, they will get a sick
  mark; And be asked to return home.

---
The Symptom Kiosk is a easy to use, self-help kiosk designed to provide clear instructions. If they are clear to come into the building, they'll see a clear mark show up. If they aren't feeling well, or have a temperature, they will get a sick mark; And be asked to return home.

## The Project:

Please, note: This project is in no-way affiliated with any medical device company or government agency. This is purely a project created out of interest and lack of things to do during, "lockdown". With that being said, I will not and can not be responsible for the accuracy of the device, and or code and software. If you use my project, you do so at your own risk.

## The Stack:

ReactJS, and NodeJS

## The Hardware:

We used an iPad Mini, with a Lightning to USB adapter to test the frontend application. Note we recommend using a Raspberry PI, with a touchscreen interface to provide the best hardware experience for your end-users.

## Project Requirements:

* Must have CRUD functionality.
* Must have validation for the new order
* Must have a sign on page that is attached to a pin number. So no one can access the orders or home route without signing on with a pin number
* Must include a Progress tracker: Allow the cooks to change the progress of the order. New orders should have the progress automatically set to new-order.
* Needs to Have a space to add special instructions to an order
* Needs to Have an alert show on the screen if there is special instructions on the order
* Needs to Have an option to say if the order is a to-go order or dine-in