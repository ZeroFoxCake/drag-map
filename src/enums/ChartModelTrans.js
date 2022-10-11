function TitleChartModel () {
  return {
    show: true,
    text: '',
    subtext: '',
    sublink: '',
    textStyle: {
      color: '#333',
      fontStyle: 'normal',
      fontWeight: 'bolder',
      fontSize: 18
    }
  }
}

function XChartModel () {
  return {
    type: 'category',
    data: []
  }
}

function YChartModel () {
  return {
    type: 'value'
  }
}

function SeriesModel () {
  return {
    data: [],
    type: '',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)'
    }
  }
}

function isObject (e) {
  return Object.prototype.toString.call(e).includes('Object')
}

function modelTrans ( sets, models = new TitleChartModel() ) {
  for (let key in models) {
    if (isObject(models[key])) {
      modelTrans(sets, models[key])
    } else if (sets[key]) {
      models[key] = sets[key]
    }
  }
  return models
}

export default {
  title: sets => modelTrans( sets, new TitleChartModel() ),
  xAxis: sets => modelTrans( sets, new XChartModel() ),
  yAxis: sets => modelTrans( sets, new YChartModel() )
}