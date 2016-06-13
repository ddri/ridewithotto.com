var initialRedirectTarget = document.querySelector('#redirectURL');
initialRedirectTarget.setAttribute('value', window.location.href + "#booked")

if(window.location.href.indexOf("booked") > -1) {
  var shadow = document.querySelector('#modalShadow');
  shadow.className = "overlay";
  var form = document.querySelector('#formContents');
  var target = window.location.href.replace('booked', 'success');
  form.innerHTML = `
      <form action="https://formspree.io/dom@hutton.systems"
            method="POST"
            class="form form__shadowed">
        <input type="hidden" name="_next" value="${target}" />
        <div class="row form-contents__success">
          <div class="twelve columns">
            <div class="image-center">
              <div>
                <img class="image-scale" src="images/otto-logo.png">
              </div>
            </div>
            <h3 id="booked">Oh no, we're not in your area yet!</h3>
            <p>We're doing our best to expand quickly. Just leave us your email and we'll let you know
              as soon as we're in your neighborhood!</p>
            <div id="formEmailState" class="row">
              <div class="six columns">
                <input class="u-full-width form--input__success" type="email" placeholder="Enter your email" name="email" id="emailInput">
              </div>
              <div class="six columns">
                <input id="submitEmail" class="u-full-width form--success-button" type="submit" value="I want Otto!">
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
}

if(window.location.href.indexOf("success") > -1) {
  var shadow = document.querySelector('#modalShadow');
  shadow.className = "overlay";
  var formState = document.querySelector('#formContents');
  formState.innerHTML = `
      <form action="https://formspree.io/dom@hutton.systems"
            method="POST"
            class="form form__shadowed">
        <input type="hidden" name="_next" value="" />
        <div class="row form-contents__success">
          <div class="twelve columns">
            <div class="image-center">
              <div>
                <img class="image-scale" src="images/otto-logo.png">
              </div>
            </div>
            <h3 id="booked">Oh no, we're not in your area yet!</h3>
            <p>We're doing our best to expand quickly. Just leave us your email and we'll let you know
              as soon as we're in your neighborhood!</p>
            <div class="row">
              <h4 class="form-success-text">Thank you, you've been added to the list!</h4>
            </div>
          </div>
        </div>
      </form>
  `;
}
