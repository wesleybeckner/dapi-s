Vue.component('loading', {
  template: '<div class="vue-load"><div class="block-loader"><span class="block"></span><span class="block"></span><span class="block"></span><span class="block"></span></div></div>' });


var results = [
    {
      loss: 2.42,
      jumbos: 151,
      inventory: "3x772 + 3x588 + 0x864 + 0x925",
      summary: [
        { loss: 8.4287200832, jumbos: 6.0, layout: "4x864" },
        { loss: 2.2892819979, jumbos: 84.0, layout: "4x772 + 1x588" },
        { loss: 2.0811654527, jumbos: 58.0, layout: "4x925" },
        { loss: 0.9365244537, jumbos: 3.0, layout: "1x772 + 5x588" }
      ],
      combinations: 2,
      patterns: 4,
      target: 1.0,
      edge: 1,
      "loss rank": 0.125,
      "jumbo rank": 0.1875,
      "inv. 772": 3.0,
      "inv. 588": 3.0,
      "inv. 864": 0.0,
      "inv. 925": 0.0
    },
    {
      loss: 2.46,
      jumbos: 156,
      inventory: "14x772 + 1x588 + 4x864 + 8x925",
      summary: [
        { loss: 8.4287200832, jumbos: 7.0, layout: "4x864" },
        { loss: 2.2892819979, jumbos: 87.0, layout: "4x772 + 1x588" },
        { loss: 2.0811654527, jumbos: 60.0, layout: "4x925" },
        { loss: 0.9365244537, jumbos: 2.0, layout: "1x772 + 5x588" }
      ],
      combinations: 2,
      patterns: 4,
      target: 1.05,
      edge: 1,
      "loss rank": 0.25,
      "jumbo rank": 0.4375,
      "inv. 772": 14.0,
      "inv. 588": 1.0,
      "inv. 864": 4.0,
      "inv. 925": 8.0
    },
    {
      loss: 2.47,
      jumbos: 151,
      inventory: "3x772 + 3x588 + 0x864 + 0x925",
      summary: [
        { loss: 8.4763390536, jumbos: 6.0, layout: "4x864" },
        { loss: 2.3400936037, jumbos: 84.0, layout: "4x772 + 1x588" },
        { loss: 2.1320852834, jumbos: 58.0, layout: "4x925" },
        { loss: 0.9880395216, jumbos: 3.0, layout: "1x772 + 5x588" }
      ],
      combinations: 2,
      patterns: 4,
      target: 1.0,
      edge: 2,
      "loss rank": 0.375,
      "jumbo rank": 0.1875,
      "inv. 772": 3.0,
      "inv. 588": 3.0,
      "inv. 864": 0.0,
      "inv. 925": 0.0
    },
];
var deckle_bundle = {
  width1: "772",
  width2: "588",
  width3: "864",
  width4: "925",
  width5: "",
  width6: "",
  roll1: "336",
  roll2: "96",
  roll3: "24",
  roll4: "232",
  roll5: "",
  roll6: "",
  neck1: "16",
  neck2: "16",
  neck3: "16",
  neck4: "16",
  neck5: "",
  neck6: "",
  usable_width: "3842",
  put_up: "34000",
  doffs_per_jumbo: "1",
  max_widths: "2, 3",
  max_layouts: "3, 4",
  production_targets: "0.95, 1",
  edge_allowance: "0" };

function testFill() {
  for (i = 0; i < Object.keys(deckle_bundle).length; i++) {
    console.log(Object.keys(deckle_bundle)[i]);
    document.getElementById(
    Object.keys(deckle_bundle)[i]).
    value = Object.values(deckle_bundle)[i];
  }
}
function bundleDeckle() {
  for (i = 0; i < Object.keys(deckle_bundle).length; i++) {

    deckle_bundle[Object.keys(deckle_bundle)[i]] = document.getElementById(
    Object.keys(deckle_bundle)[i]).
    value;
  }
  let var1 = deckle_bundle['max_widths'].split(", ").length;
  let var2 = deckle_bundle['max_layouts'].split(", ").length;
  let var3 = deckle_bundle['production_targets'].split(", ").length;
  let var4 = deckle_bundle['edge_allowance'].split(", ").length;
  let parameters = var1 * var2 * var3 * var4;

  document.getElementById("est_time_p").innerHTML = "est. time: " + parameters + " sec";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    $("#loading").removeClass("hidden");
  };
  xhttp.open("POST", "http://apiplan.mfganalytic.com/front-api-search", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(deckle_bundle));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      $("#loading").addClass("hidden");

      resultsTable.myItems = JSON.parse(this.responseText);
      // resultsTable.$refs.myTable.headers = resultsTable.getHeaders(this.responseText);
      // resultsTable.$refs.myTable.reload;
      console.log(this.responseText);
      console.log(resultsTable.$refs.myTable.headers);

    }
  };
}
new Vue({
  el: "#loading",
  data: {
    loading: true } });



var resultsTable = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      jumbos: "",
      loss: "",
      combinations: "",
      patterns: "",
      target: "",
      edge: "",
      expanded: [],
      singleExpand: false,
      summaryHeaders: [
      { text: "Loss (%)", value: "loss" },
      { text: "Jumbos", value: "jumbos" },
      { text: "Layout", value: "layout" }],

      myItems: results };

  },
  methods: {
    getHeaders(myItems) {
      var stuff = [];
      var baseHeaders = this.myHeaders;
      console.log(baseHeaders);
      for (item in baseHeaders) {
        stuff.push(baseHeaders[item]);
      };
      console.log("stuff before", stuff);
      console.log(myItems);
      for (label in myItems[0]) {
        if (label.includes("inv.") && stuff.includes("{text: label, value: label}") == false) {
          stuff.push(
          { text: label, value: label });

        }
      }
      stuff.push({ text: "", value: "data-table-expand" });
      console.log("stuff after", stuff);
      return stuff;
    } },

  computed: {
    myHeaders() {
      var headers = [
      {
        text: "% Loss",
        value: "loss",
        filter: value => {
          if (!this.loss) return true;

          return value < parseFloat(this.loss);
        } },

      {
        text: "Jumbos",
        value: "jumbos",
        filter: value => {
          if (!this.jumbos) return true;

          return value < parseInt(this.jumbos);
        } },

      {
        text: "Combos",
        value: "combinations",
        filter: value => {
          if (!this.combinations) return true;

          return value < parseInt(this.combinations);
        } },

      {
        text: "Patterns",
        value: "patterns",
        filter: value => {
          if (!this.patterns) return true;

          return value < parseInt(this.patterns);
        } },

      {
        text: "Target",
        value: "target",
        filter: value => {
          if (!this.target) return true;

          return value > parseFloat(this.target);
        } },

      {
        text: "Edge",
        value: "edge",
        filter: value => {
          if (!this.edge) return true;

          return value < parseInt(this.edge);
        } }];


      return headers;
    } } });
