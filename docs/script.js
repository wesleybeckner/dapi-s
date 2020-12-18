Vue.component('loading', {
  template: '<div class="vue-load"><div class="block-loader"><span class="block"></span><span class="block"></span><span class="block"></span><span class="block"></span></div></div>' });


var results = [
{
  loss: 0.0543505738,
  jumbos: 95,
  inventory: { "205": 1.0, "195": 6.0, "220": 14.0, "160": 2.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 29.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 33.0, layout: "5x205 + 14x220" },
  { loss: 0.0240153698, jumbos: 4.0, layout: "14x205 + 2x220 + 5x160" },
  { loss: 0.0240153698, jumbos: 29.0, layout: "20x195 + 1x220" }],

  combinations: 3,
  patterns: 4,
  target: 1.03,
  edge: 2,
  lrank: 0.0185185185,
  jrank: 0.7962962963 },

{
  loss: 0.0543644636,
  jumbos: 91,
  inventory: { "205": 2.0, "195": 8.0, "220": 4.0, "160": 3.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 28.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 31.0, layout: "5x205 + 14x220" },
  { loss: 0.0240153698, jumbos: 4.0, layout: "14x205 + 2x220 + 5x160" },
  { loss: 0.0240153698, jumbos: 28.0, layout: "20x195 + 1x220" }],

  combinations: 3,
  patterns: 4,
  target: 0.99,
  edge: 2,
  lrank: 0.037037037,
  jrank: 0.2222222222 },

{
  loss: 0.0544178061,
  jumbos: 94,
  inventory: { "205": 4.0, "195": 11.0, "220": 5.0, "160": 2.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 29.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 32.0, layout: "5x205 + 14x220" },
  { loss: 0.0240153698, jumbos: 4.0, layout: "14x205 + 2x220 + 5x160" },
  { loss: 0.0240153698, jumbos: 29.0, layout: "20x195 + 1x220" }],

  combinations: 3,
  patterns: 4,
  target: 1.02,
  edge: 2,
  lrank: 0.0555555556,
  jrank: 0.6481481481 },

{
  loss: 0.054744714,
  jumbos: 93,
  inventory: { "205": 20.0, "195": 3.0, "220": 14.0, "160": 3.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 29.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 32.0, layout: "5x205 + 14x220" },
  { loss: 0.0240153698, jumbos: 4.0, layout: "14x205 + 2x220 + 5x160" },
  { loss: 0.0240153698, jumbos: 28.0, layout: "20x195 + 1x220" }],

  combinations: 3,
  patterns: 4,
  target: 1.0,
  edge: 2,
  lrank: 0.0740740741,
  jrank: 0.4722222222 },

{
  loss: 0.0569726327,
  jumbos: 94,
  inventory: { "205": 3.0, "195": 11.0, "220": 3.0, "160": 6.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 32.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 31.0, layout: "5x205 + 14x220" },
  { loss: 0.0480307397, jumbos: 2.0, layout: "10x220 + 12x160" },
  { loss: 0.0240153698, jumbos: 29.0, layout: "20x195 + 1x220" }],

  combinations: 2,
  patterns: 4,
  target: 1.02,
  edge: 2,
  lrank: 0.0925925926,
  jrank: 0.6481481481 },

{
  loss: 0.0570035152,
  jumbos: 91,
  inventory: { "205": 1.0, "195": 8.0, "220": 2.0, "160": 7.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 31.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 30.0, layout: "5x205 + 14x220" },
  { loss: 0.0480307397, jumbos: 2.0, layout: "10x220 + 12x160" },
  { loss: 0.0240153698, jumbos: 28.0, layout: "20x195 + 1x220" }],

  combinations: 2,
  patterns: 4,
  target: 0.99,
  edge: 2,
  lrank: 0.1111111111,
  jrank: 0.2222222222 },

{
  loss: 0.0572866635,
  jumbos: 96,
  inventory: { "205": 20.0, "195": 6.0, "220": 12.0, "160": 6.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 33.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 32.0, layout: "5x205 + 14x220" },
  { loss: 0.0480307397, jumbos: 2.0, layout: "10x220 + 12x160" },
  { loss: 0.0240153698, jumbos: 29.0, layout: "20x195 + 1x220" }],

  combinations: 2,
  patterns: 4,
  target: 1.03,
  edge: 2,
  lrank: 0.1296296296,
  jrank: 0.9259259259 },

{
  loss: 0.0573270119,
  jumbos: 93,
  inventory: { "205": 19.0, "195": 3.0, "220": 12.0, "160": 7.0 },
  summary: [
  { loss: 0.0960614793, jumbos: 32.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 31.0, layout: "5x205 + 14x220" },
  { loss: 0.0480307397, jumbos: 2.0, layout: "10x220 + 12x160" },
  { loss: 0.0240153698, jumbos: 28.0, layout: "20x195 + 1x220" }],

  combinations: 2,
  patterns: 4,
  target: 1.0,
  edge: 2,
  lrank: 0.1481481481,
  jrank: 0.4722222222 },

{
  loss: 0.097674613,
  jumbos: 92,
  inventory: { "205": 11.0, "195": 2.0, "220": 18.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 9.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 19.0, layout: "3x195 + 16x220" },
  { loss: 0.0240269101, jumbos: 60.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 4,
  target: 0.99,
  edge: 1,
  lrank: 0.1666666667,
  jrank: 0.3333333333 },

{
  loss: 0.0987772972,
  jumbos: 90,
  inventory: { "205": 6.0, "195": 1.0, "220": 4.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 9.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 18.0, layout: "3x195 + 16x220" },
  { loss: 0.0240269101, jumbos: 59.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 4,
  target: 0.98,
  edge: 1,
  lrank: 0.1851851852,
  jrank: 0.1018518519 },

{
  loss: 0.0996171892,
  jumbos: 89,
  inventory: { "205": 1.0, "195": 2.0, "220": 6.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 9.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 18.0, layout: "3x195 + 16x220" },
  { loss: 0.0240269101, jumbos: 58.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 4,
  target: 0.97,
  edge: 1,
  lrank: 0.2037037037,
  jrank: 0.0277777778 },

{
  loss: 0.1014188523,
  jumbos: 95,
  inventory: { "205": 6.0, "195": 9.0, "220": 5.0, "160": 2.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 10.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 19.0, layout: "3x195 + 16x220" },
  { loss: 0.0240269101, jumbos: 62.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 4,
  target: 1.03,
  edge: 1,
  lrank: 0.2222222222,
  jrank: 0.7962962963 },

{
  loss: 0.1022421708,
  jumbos: 94,
  inventory: { "205": 9.0, "195": 16.0, "220": 12.0, "160": 2.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 10.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 19.0, layout: "3x195 + 16x220" },
  { loss: 0.0240269101, jumbos: 61.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 4,
  target: 1.01,
  edge: 1,
  lrank: 0.2407407407,
  jrank: 0.6481481481 },

{
  loss: 0.1030831951,
  jumbos: 93,
  inventory: { "205": 4.0, "195": 18.0, "220": 14.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 10.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 19.0, layout: "3x195 + 16x220" },
  { loss: 0.0240269101, jumbos: 60.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 4,
  target: 1.0,
  edge: 1,
  lrank: 0.2592592593,
  jrank: 0.4722222222 },

{
  loss: 0.1133854186,
  jumbos: 89,
  inventory: { "205": 1.0, "195": 3.0, "220": 2.0, "160": 7.0 },
  summary: [
  { loss: 0.336376742, jumbos: 25.0, layout: "12x195 + 8x220" },
  { loss: 0.0480538203, jumbos: 6.0, layout: "2x195 + 14x220 + 4x160" },
  { loss: 0.0240269101, jumbos: 58.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 3,
  target: 0.97,
  edge: 1,
  lrank: 0.2777777778,
  jrank: 0.0277777778 },

{
  loss: 0.1138666611,
  jumbos: 92,
  inventory: { "205": 4.0, "195": 7.0, "220": 2.0, "160": 7.0 },
  summary: [
  { loss: 0.336376742, jumbos: 26.0, layout: "12x195 + 8x220" },
  { loss: 0.0480538203, jumbos: 6.0, layout: "2x195 + 14x220 + 4x160" },
  { loss: 0.0240269101, jumbos: 60.0, layout: "13x205 + 4x195 + 3x220" }],

  combinations: 3,
  patterns: 3,
  target: 1.0,
  edge: 1,
  lrank: 0.2962962963,
  jrank: 0.3333333333 },

{
  loss: 0.1282922241,
  jumbos: 92,
  inventory: { "205": 11.0, "195": 5.0, "220": 14.0, "160": 3.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 19.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 30.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 39.0, layout: "20x205" }],

  combinations: 3,
  patterns: 4,
  target: 0.99,
  edge: 0,
  lrank: 0.3148148148,
  jrank: 0.3333333333 },

{
  loss: 0.1294378698,
  jumbos: 91,
  inventory: { "205": 19.0, "195": 8.0, "220": 3.0, "160": 3.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 19.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 29.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 39.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 0.98,
  edge: 0,
  lrank: 0.3333333333,
  jrank: 0.2222222222 },

{
  loss: 0.1303137652,
  jumbos: 95,
  inventory: { "205": 8.0, "195": 12.0, "220": 16.0, "160": 2.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 20.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 31.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.02,
  edge: 0,
  lrank: 0.3518518519,
  jrank: 0.7962962963 },

{
  loss: 0.1308760684,
  jumbos: 90,
  inventory: { "205": 7.0, "195": 13.0, "220": 8.0, "160": 3.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 19.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 29.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 38.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 0.97,
  edge: 0,
  lrank: 0.3703703704,
  jrank: 0.1018518519 },

{
  loss: 0.1314443535,
  jumbos: 94,
  inventory: { "205": 16.0, "195": 15.0, "220": 5.0, "160": 2.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 20.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 30.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.01,
  edge: 0,
  lrank: 0.3888888889,
  jrank: 0.6481481481 },

{
  loss: 0.1328577337,
  jumbos: 93,
  inventory: { "205": 4.0, "195": 21.0, "220": 10.0, "160": 3.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 20.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 30.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 39.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.0,
  edge: 0,
  lrank: 0.4074074074,
  jrank: 0.4722222222 },

{
  loss: 0.1347155449,
  jumbos: 96,
  inventory: { "205": 0.0, "195": 28.0, "220": 11.0, "160": 2.0 },
  summary: [
  { loss: 0.5528846154, jumbos: 21.0, layout: "21x195" },
  { loss: 0.1442307692, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0240384615, jumbos: 31.0, layout: "3x195 + 16x220" },
  { loss: 0.0, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.03,
  edge: 0,
  lrank: 0.4259259259,
  jrank: 0.9259259259 },

{
  loss: 0.176284395,
  jumbos: 92,
  inventory: { "205": 11.0, "195": 5.0, "220": 14.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 19.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 30.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 39.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 0.99,
  edge: 1,
  lrank: 0.4444444444,
  jrank: 0.3333333333 },

{
  loss: 0.1774294903,
  jumbos: 91,
  inventory: { "205": 19.0, "195": 8.0, "220": 3.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 19.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 29.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 39.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 0.98,
  edge: 1,
  lrank: 0.462962963,
  jrank: 0.2222222222 },

{
  loss: 0.1783049647,
  jumbos: 95,
  inventory: { "205": 8.0, "195": 12.0, "220": 16.0, "160": 2.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 20.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 31.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.02,
  edge: 1,
  lrank: 0.4814814815,
  jrank: 0.7962962963 },

{
  loss: 0.1788669977,
  jumbos: 90,
  inventory: { "205": 7.0, "195": 13.0, "220": 8.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 19.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 29.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 38.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 0.97,
  edge: 1,
  lrank: 0.5,
  jrank: 0.1018518519 },

{
  loss: 0.1794350098,
  jumbos: 94,
  inventory: { "205": 16.0, "195": 15.0, "220": 5.0, "160": 2.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 20.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 30.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.01,
  edge: 1,
  lrank: 0.5185185185,
  jrank: 0.6481481481 },

{
  loss: 0.1808477107,
  jumbos: 93,
  inventory: { "205": 4.0, "195": 21.0, "220": 10.0, "160": 3.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 20.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 30.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 39.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.0,
  edge: 1,
  lrank: 0.537037037,
  jrank: 0.4722222222 },

{
  loss: 0.1827046292,
  jumbos: 96,
  inventory: { "205": 0.0, "195": 28.0, "220": 11.0, "160": 2.0 },
  summary: [
  { loss: 0.6006727535, jumbos: 21.0, layout: "21x195" },
  { loss: 0.1922152811, jumbos: 4.0, layout: "17x195 + 5x160" },
  { loss: 0.0720807304, jumbos: 31.0, layout: "3x195 + 16x220" },
  { loss: 0.0480538203, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 4,
  target: 1.03,
  edge: 1,
  lrank: 0.5555555556,
  jrank: 0.9259259259 },

{
  loss: 0.4540891801,
  jumbos: 91,
  inventory: { "205": 18.0, "195": 2.0, "220": 3.0, "160": 4.0 },
  summary: [
  { loss: 1.4182692308, jumbos: 21.0, layout: "20x195 + 1x160" },
  { loss: 0.2644230769, jumbos: 41.0, layout: "19x205 + 1x195" },
  { loss: 0.0240384615, jumbos: 29.0, layout: "3x195 + 16x220" }],

  combinations: 3,
  patterns: 3,
  target: 0.98,
  edge: 0,
  lrank: 0.5740740741,
  jrank: 0.2222222222 },

{
  loss: 0.4561965812,
  jumbos: 90,
  inventory: { "205": 7.0, "195": 6.0, "220": 8.0, "160": 4.0 },
  summary: [
  { loss: 1.4182692308, jumbos: 21.0, layout: "20x195 + 1x160" },
  { loss: 0.2644230769, jumbos: 40.0, layout: "19x205 + 1x195" },
  { loss: 0.0240384615, jumbos: 29.0, layout: "3x195 + 16x220" }],

  combinations: 2,
  patterns: 3,
  target: 0.97,
  edge: 0,
  lrank: 0.5925925926,
  jrank: 0.1018518519 },

{
  loss: 0.4598325062,
  jumbos: 93,
  inventory: { "205": 3.0, "195": 14.0, "220": 10.0, "160": 5.0 },
  summary: [
  { loss: 1.4182692308, jumbos: 22.0, layout: "20x195 + 1x160" },
  { loss: 0.2644230769, jumbos: 41.0, layout: "19x205 + 1x195" },
  { loss: 0.0240384615, jumbos: 30.0, layout: "3x195 + 16x220" }],

  combinations: 2,
  patterns: 3,
  target: 1.0,
  edge: 0,
  lrank: 0.6111111111,
  jrank: 0.4722222222 },

{
  loss: 0.5019247931,
  jumbos: 91,
  inventory: { "205": 18.0, "195": 2.0, "220": 3.0, "160": 4.0 },
  summary: [
  { loss: 1.4656415185, jumbos: 21.0, layout: "20x195 + 1x160" },
  { loss: 0.3123498318, jumbos: 41.0, layout: "19x205 + 1x195" },
  { loss: 0.0720807304, jumbos: 29.0, layout: "3x195 + 16x220" }],

  combinations: 3,
  patterns: 3,
  target: 0.98,
  edge: 1,
  lrank: 0.6296296296,
  jrank: 0.2222222222 },

{
  loss: 0.5040311816,
  jumbos: 90,
  inventory: { "205": 7.0, "195": 6.0, "220": 8.0, "160": 4.0 },
  summary: [
  { loss: 1.4656415185, jumbos: 21.0, layout: "20x195 + 1x160" },
  { loss: 0.3123498318, jumbos: 40.0, layout: "19x205 + 1x195" },
  { loss: 0.0720807304, jumbos: 29.0, layout: "3x195 + 16x220" }],

  combinations: 2,
  patterns: 3,
  target: 0.97,
  edge: 1,
  lrank: 0.6481481481,
  jrank: 0.1018518519 },

{
  loss: 0.5055875346,
  jumbos: 94,
  inventory: { "205": 6.0, "195": 3.0, "220": 0.0, "160": 4.0 },
  summary: [
  { loss: 1.4656415185, jumbos: 22.0, layout: "20x195 + 1x160" },
  { loss: 0.3123498318, jumbos: 42.0, layout: "19x205 + 1x195" },
  { loss: 0.0720807304, jumbos: 30.0, layout: "3x195 + 16x220" }],

  combinations: 3,
  patterns: 3,
  target: 1.02,
  edge: 1,
  lrank: 0.6666666667,
  jrank: 0.6481481481 },

{
  loss: 0.5076653594,
  jumbos: 93,
  inventory: { "205": 3.0, "195": 14.0, "220": 10.0, "160": 5.0 },
  summary: [
  { loss: 1.4656415185, jumbos: 22.0, layout: "20x195 + 1x160" },
  { loss: 0.3123498318, jumbos: 41.0, layout: "19x205 + 1x195" },
  { loss: 0.0720807304, jumbos: 30.0, layout: "3x195 + 16x220" }],

  combinations: 2,
  patterns: 3,
  target: 1.0,
  edge: 1,
  lrank: 0.6851851852,
  jrank: 0.4722222222 },

{
  loss: 0.5095434991,
  jumbos: 92,
  inventory: { "205": 1.0, "195": 8.0, "220": 10.0, "160": 11.0 },
  summary: [
  { loss: 1.5129682997, jumbos: 28.0, layout: "20x195 + 1x160" },
  { loss: 0.0960614793, jumbos: 30.0, layout: "20x205" },
  { loss: 0.0480307397, jumbos: 34.0, layout: "5x205 + 14x220" }],

  combinations: 2,
  patterns: 3,
  target: 0.99,
  edge: 2,
  lrank: 0.7037037037,
  jrank: 0.3333333333 },

{
  loss: 0.5728297689,
  jumbos: 95,
  inventory: { "205": 10.0, "195": 4.0, "220": 10.0, "160": 9.0 },
  summary: [
  { loss: 1.5129682997, jumbos: 27.0, layout: "20x195 + 1x160" },
  { loss: 0.3602305476, jumbos: 33.0, layout: "19x205 + 1x195" },
  { loss: 0.0480307397, jumbos: 35.0, layout: "5x205 + 14x220" }],

  combinations: 2,
  patterns: 3,
  target: 1.02,
  edge: 2,
  lrank: 0.7222222222,
  jrank: 0.7962962963 },

{
  loss: 0.5763688761,
  jumbos: 91,
  inventory: { "205": 12.0, "195": 6.0, "220": 1.0, "160": 9.0 },
  summary: [
  { loss: 1.5129682997, jumbos: 26.0, layout: "20x195 + 1x160" },
  { loss: 0.3602305476, jumbos: 32.0, layout: "19x205 + 1x195" },
  { loss: 0.0480307397, jumbos: 33.0, layout: "5x205 + 14x220" }],

  combinations: 3,
  patterns: 3,
  target: 0.98,
  edge: 2,
  lrank: 0.7407407407,
  jrank: 0.2222222222 },

{
  loss: 0.5784127373,
  jumbos: 94,
  inventory: { "205": 13.0, "195": 10.0, "220": 1.0, "160": 9.0 },
  summary: [
  { loss: 1.5129682997, jumbos: 27.0, layout: "20x195 + 1x160" },
  { loss: 0.3602305476, jumbos: 33.0, layout: "19x205 + 1x195" },
  { loss: 0.0480307397, jumbos: 34.0, layout: "5x205 + 14x220" }],

  combinations: 2,
  patterns: 3,
  target: 1.01,
  edge: 2,
  lrank: 0.7592592593,
  jrank: 0.6481481481 },

{
  loss: 0.5787704131,
  jumbos: 90,
  inventory: { "205": 1.0, "195": 10.0, "220": 6.0, "160": 9.0 },
  summary: [
  { loss: 1.5129682997, jumbos: 26.0, layout: "20x195 + 1x160" },
  { loss: 0.3602305476, jumbos: 31.0, layout: "19x205 + 1x195" },
  { loss: 0.0480307397, jumbos: 33.0, layout: "5x205 + 14x220" }],

  combinations: 3,
  patterns: 3,
  target: 0.97,
  edge: 2,
  lrank: 0.7777777778,
  jrank: 0.1018518519 },

{
  loss: 1.462888435,
  jumbos: 96,
  inventory: { "205": 0.0, "195": 6.0, "220": 1.0, "160": 11.0 },
  summary: [
  { loss: 3.5559827006, jumbos: 27.0, layout: "18x220" },
  { loss: 1.4656415185, jumbos: 29.0, layout: "20x195 + 1x160" },
  { loss: 0.0480538203, jumbos: 40.0, layout: "20x205" }],

  combinations: 3,
  patterns: 3,
  target: 1.03,
  edge: 1,
  lrank: 0.7962962963,
  jrank: 0.9259259259 },

{
  loss: 1.5102165386,
  jumbos: 96,
  inventory: { "205": 0.0, "195": 6.0, "220": 1.0, "160": 11.0 },
  summary: [
  { loss: 3.6023054755, jumbos: 27.0, layout: "18x220" },
  { loss: 1.5129682997, jumbos: 29.0, layout: "20x195 + 1x160" },
  { loss: 0.0960614793, jumbos: 40.0, layout: "20x205" }],

  combinations: 2,
  patterns: 3,
  target: 1.03,
  edge: 2,
  lrank: 0.8148148148,
  jrank: 0.9259259259 },

{
  loss: 1.6103071923,
  jumbos: 94,
  inventory: { "205": 3.0, "195": 4.0, "220": 16.0, "160": 9.0 },
  summary: [
  { loss: 3.6023054755, jumbos: 27.0, layout: "18x220" },
  { loss: 1.5129682997, jumbos: 26.0, layout: "20x195 + 1x160" },
  { loss: 0.3602305476, jumbos: 41.0, layout: "19x205 + 1x195" }],

  combinations: 2,
  patterns: 3,
  target: 1.0,
  edge: 2,
  lrank: 0.8333333333,
  jrank: 0.6481481481 },

{
  loss: 1.8075398042,
  jumbos: 94,
  inventory: { "205": 1.0, "195": 1.0, "220": 12.0, "160": 16.0 },
  summary: [
  { loss: 4.1306436119, jumbos: 31.0, layout: "18x195 + 2x220" },
  { loss: 1.2247838617, jumbos: 33.0, layout: "19x205 + 1x160" },
  { loss: 0.0480307397, jumbos: 30.0, layout: "5x205 + 14x220" }],

  combinations: 3,
  patterns: 3,
  target: 1.0,
  edge: 2,
  lrank: 0.8518518519,
  jrank: 0.6481481481 },

{
  loss: 1.8256684278,
  jumbos: 96,
  inventory: { "205": 4.0, "195": 7.0, "220": 4.0, "160": 16.0 },
  summary: [
  { loss: 4.1306436119, jumbos: 32.0, layout: "18x195 + 2x220" },
  { loss: 1.2247838617, jumbos: 34.0, layout: "19x205 + 1x160" },
  { loss: 0.0480307397, jumbos: 30.0, layout: "5x205 + 14x220" }],

  combinations: 3,
  patterns: 3,
  target: 1.02,
  edge: 2,
  lrank: 0.8703703704,
  jrank: 0.9259259259 },

{
  loss: 1.8264592565,
  jumbos: 93,
  inventory: { "205": 3.0, "195": 6.0, "220": 2.0, "160": 16.0 },
  summary: [
  { loss: 4.1306436119, jumbos: 31.0, layout: "18x195 + 2x220" },
  { loss: 1.2247838617, jumbos: 33.0, layout: "19x205 + 1x160" },
  { loss: 0.0480307397, jumbos: 29.0, layout: "5x205 + 14x220" }],

  combinations: 3,
  patterns: 3,
  target: 0.99,
  edge: 2,
  lrank: 0.8888888889,
  jrank: 0.4722222222 },

{
  loss: 2.2981286187,
  jumbos: 93,
  inventory: { "205": 5.0, "195": 0.0, "220": 5.0, "160": 3.0 },
  summary: [
  { loss: 4.6394230769, jumbos: 43.0, layout: "18x205 + 1x220" },
  { loss: 0.2884615385, jumbos: 46.0, layout: "12x195 + 8x220" },
  { loss: 0.2403846154, jumbos: 4.0, layout: "15x220 + 5x160" }],

  combinations: 3,
  patterns: 3,
  target: 0.99,
  edge: 0,
  lrank: 0.9074074074,
  jrank: 0.4722222222 },

{
  loss: 2.3016194332,
  jumbos: 95,
  inventory: { "205": 8.0, "195": 1.0, "220": 5.0, "160": 2.0 },
  summary: [
  { loss: 4.6394230769, jumbos: 44.0, layout: "18x205 + 1x220" },
  { loss: 0.2884615385, jumbos: 47.0, layout: "12x195 + 8x220" },
  { loss: 0.2403846154, jumbos: 4.0, layout: "15x220 + 5x160" }],

  combinations: 3,
  patterns: 3,
  target: 1.01,
  edge: 0,
  lrank: 0.9259259259,
  jrank: 0.7962962963 },

{
  loss: 2.3049662966,
  jumbos: 97,
  inventory: { "205": 10.0, "195": 2.0, "220": 4.0, "160": 2.0 },
  summary: [
  { loss: 4.6394230769, jumbos: 45.0, layout: "18x205 + 1x220" },
  { loss: 0.2884615385, jumbos: 48.0, layout: "12x195 + 8x220" },
  { loss: 0.2403846154, jumbos: 4.0, layout: "15x220 + 5x160" }],

  combinations: 3,
  patterns: 3,
  target: 1.03,
  edge: 0,
  lrank: 0.9444444444,
  jrank: 1.0 },

{
  loss: 2.3450781004,
  jumbos: 93,
  inventory: { "205": 5.0, "195": 0.0, "220": 5.0, "160": 3.0 },
  summary: [
  { loss: 4.6852474772, jumbos: 43.0, layout: "18x205 + 1x220" },
  { loss: 0.336376742, jumbos: 46.0, layout: "12x195 + 8x220" },
  { loss: 0.2883229217, jumbos: 4.0, layout: "15x220 + 5x160" }],

  combinations: 3,
  patterns: 3,
  target: 0.99,
  edge: 1,
  lrank: 0.962962963,
  jrank: 0.4722222222 },

{
  loss: 2.3485672374,
  jumbos: 95,
  inventory: { "205": 8.0, "195": 1.0, "220": 5.0, "160": 2.0 },
  summary: [
  { loss: 4.6852474772, jumbos: 44.0, layout: "18x205 + 1x220" },
  { loss: 0.336376742, jumbos: 47.0, layout: "12x195 + 8x220" },
  { loss: 0.2883229217, jumbos: 4.0, layout: "15x220 + 5x160" }],

  combinations: 3,
  patterns: 3,
  target: 1.01,
  edge: 1,
  lrank: 0.9814814815,
  jrank: 0.7962962963 },

{
  loss: 2.5495793269,
  jumbos: 96,
  inventory: { "205": 6.0, "195": 1.0, "220": 0.0, "160": 6.0 },
  summary: [
  { loss: 5.0, jumbos: 42.0, layout: "19x205" },
  { loss: 1.4182692308, jumbos: 24.0, layout: "20x195 + 1x160" },
  { loss: 0.0240384615, jumbos: 30.0, layout: "3x195 + 16x220" }],

  combinations: 3,
  patterns: 3,
  target: 1.02,
  edge: 0,
  lrank: 1.0,
  jrank: 0.9259259259 }];


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
    console.log(Object.keys(deckle_bundle)[i]);
    deckle_bundle[Object.keys(deckle_bundle)[i]] = document.getElementById(
    Object.keys(deckle_bundle)[i]).
    value;
  }
  let var1 = deckle_bundle['max_widths'].split(", ").length;
  let var2 = deckle_bundle['max_layouts'].split(", ").length;
  let var3 = deckle_bundle['production_targets'].split(", ").length;
  let var4 = deckle_bundle['edge_allowance'].split(", ").length;
  let parameters = var1 * var2 * var3 * var4;
  console.log(parameters);
  document.getElementById("est_time_p").innerHTML = "est. time: " + parameters + " sec";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    $("#loading").removeClass("hidden");
  };
  xhttp.open("POST", "http://localhost:5000/front-api-search", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(deckle_bundle));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      $("#loading").addClass("hidden");
      console.log(this.responseText);
      resultsTable.myItems = JSON.parse(this.responseText);
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
  computed: {
    myHeaders() {
      return [
      {
        text: "Loss (%)",
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
        text: "Combinations",
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
        } },

      { text: "", value: "data-table-expand" }];

    } } });