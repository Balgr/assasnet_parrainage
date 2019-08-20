<template>
  <div class="button">
    <a>
      <svg class="icon-arrow before">
        <use xlink:href="#arrow"></use>
      </svg>
      <span class="label">{{msg}}</span>
      <svg class="icon-arrow after">
        <use xlink:href="#arrow"></use>
      </svg>
    </a>

    <svg style="display: none;">
      <defs>
        <symbol id="arrow" viewBox="0 0 35 15">
          <title>Arrow</title>
          <path
            d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "
          />
        </symbol>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
    idToScrollTo: String
  },
  methods: {
    scrollToNextQuestion: function() {
      window.location.href = this.$props.idToScrollTo;
      $(this.$props.idToScrollTo)
        .find("input")[0]
        .focus();
    }
  }
};
</script>

<style lang="stylus" scoped>
a {
    border: 3px solid white;
    border-radius 5px
    color: white;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin: auto;
    padding: 12px 32px 12px 82px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
}

a .label,
a .icon-arrow {
    backface-visibility: hidden;
    transform: translateZ(0);
    perspective: 1000;
}

a .label {
    display: inline-block;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
}

a .icon-arrow {
    fill: white;
    height: 15px;
    top: 17px;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1), opacity .4s cubic-bezier(0.86, 0, 0.07, 1);
    width: 35px;
}

a .icon-arrow.before {
    left: 32px;
    margin-right: 15px;
    position: absolute;
    transform-origin: left center;
}

a .icon-arrow.after {
    margin-left: 15px;
    opacity: 0;
    position: absolute;
    right: 32px;
    transform: translateX(75%) scaleX(0.1);
    transform-origin: right center;
}

a:hover .label {
    transform: translateX(-52px);
}

a:hover .icon-arrow.before {
    opacity: 0;
    transform: translateX(-75%) scaleX(0.1);
}

a:hover .icon-arrow.after {
    opacity: 1;
    transform: translateX(0) scaleX(1);
}

a:active {
    border-color: white;
    color: white;
}

a:active .icon-arrow {
    fill: white;
}

</style>
