<script setup>
// import the necessary software to integrate stripe

let rent = 0

// if rent hasn't been paid:
// display rent cost and a button to pay rent
// else:
// diplay $0
</script>

<template>
  <!-- figure out how to use stripe and setup a payment screen 
  every tenant owes rent on the first of the month; that amount varies by property (I assume)
  so each property can have a 'rent' field attached to it which is how much rent costs
  the tenant also needs a check to see if they paid rent; if they did, the amount owed shouled be $0
  if they haven't paid, the amount should equal the cost of rent for that property
  also would be cool to send an invoice on the first of the month to remind them that rent is due-->
  <div class="pay-container">
    <h1>Pay up!</h1>
    <a href="https://buy.stripe.com/aEUaID4y5ewHctGdQQ" target="_blank">Pay</a>
  </div>
</template>

<style scoped>
/* stripe SDK may have it's own styling guide so CSS may or may not be needed */
.pay-container {
  display: flex;
  flex-direction: column;
}
h1 {
  color: white;
  text-align: center;
}
a {
  text-align: center;
  font-size: 30px;
  color: lightblue;
}
</style>
