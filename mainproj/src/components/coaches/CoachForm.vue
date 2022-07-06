<template>
  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" />
    </div>

    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea rows="5" id="description">
    </div>

    <div class="form-control">
      <label for="rate">Hourly Rate</label>
       <input type="number" id="rate" />
    </div>

    <div class="form-control">
        <h3>Area of Expertise</h3>
        <div>
            <input type="checkbox" id="frontend" value="frontend">
            <label for="frontend">Frontend Development</label>
        </div>
        <div>
            <input type="checkbox" id="backend" value="backend">
            <label for="backend">Backend Development</label>
        </div>
        <div>
            <input type="checkbox" id="career" value="career">
            <label for="career">Career Advisory</label>
        </div>
    </div>

  </form>
</template>
