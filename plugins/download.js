import FileSaver from 'file-saver';

const Json2csvParser = require('json2csv').Parser;

import Vue from 'vue'
const datetime = Date.now();
const exportCSV = (data, filename = `${datetime}.csv`) => {
  const parser = new Json2csvParser();
  const csvData = parser.parse(data);
  const blob = new Blob(['\uFEFF' + csvData], { type: 'text/plain;charset=utf-8;' });
  FileSaver.saveAs(blob, filename);
}

const tool = {};

tool.install = function (Vue) {
  Vue.prototype.$exportCSV = exportCSV;
}

Vue.use(tool)
