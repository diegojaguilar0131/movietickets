//buisness logic
function Ticket(time, price, quantity) {
  this.time = time;
  this.price = price;
  this.quantity = quntity;
}

Ticket.prototype.finalTicketPrice = function( price, quantity){
  this.price = price * qunatity;
  alert(this.price);
}

// user interface logic
$(document).ready(function() {

  var quantity = ($button).val();
  var time = ($button).val();
  var price = ($movie form price).val();
  var newTicket = new Ticket (time, price, quantity);
  newTicket.finalTicketPrice(newTicket.price, newTicket.quantity);

});
