/* IMPORTANT JS NOTES (For ME only Not for the TEAM, skip this comment if you're watching)
    - Syntax of event Listner: element.addEventListener(event, function, useCapture);
    - All of JS events : https://www.w3schools.com/jsref/dom_obj_event.asp

*/


// Notifications checking function with JS :

const bellIcon = document.querySelector('.notification-badge');
const notificationDropdown = document.querySelector('.notifications-dropdown');

bellIcon.addEventListener('click', () => {
  notificationDropdown.classList.toggle('visible');
});

const markAsRead = () => {
  const badge = document.querySelector('.badge');
  badge.textContent = '0';
  // reset it to 0 when clicked :)
};
