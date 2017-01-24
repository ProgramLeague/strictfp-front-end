let fetched = {
  'data': [{
    'brief': '话说1926年，扬州出现了一个神奇的人。……',
    'id': 1,
    'authorInfo': {
      'gender': 8,
      'avatar': 'http://cdn.strictfp.org/avatar/1.jpg',
      'name': 'Eldath',
      'motto': 'Mo is the best way to increase knowledge.',
      'id': 1
    },
    'up': 0,
    'title': 'How to mo the older?',
    'down': 0,
    'click': 0,
    'content': '话说1926年，扬州出现了一个神奇的人。他带着一副金丝边的眼镜，喜欢把裤带提到腰，把衬衫塞进里面，没错，他就是Eldath。',
    'tags': [
      'Tech',
      'Startalk'
    ]
  }],
  'meta': {
    'code': 200.0,
    'message': 'query timeline successfully',
    'extra': {},
    'security': {}
  }
}

export default {
  test (app) {
    app.$store.state.fetched = fetched
    console.log(app.$store.state.fetched)
    console.log(fetched)
  }
}
