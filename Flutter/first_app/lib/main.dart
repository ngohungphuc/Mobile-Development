import 'package:flutter/material.dart';

import './question.dart';
import "./answer.dart";

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  var _questionIndex = 0;

  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      {
        'questionText': 'What \'s your favorite color ?',
        'answers': ['Black', 'Red', 'Green', 'White']
      },
      {
        'questionText': 'What \'s your favorite animal ?',
        'answers': ['Dog', 'Cat', 'Rabbit', 'Turtle']
      },
      {
        'questionText': 'Who \'s your favorite friend ?',
        'answers': ['Dog', 'Cat', 'Rabbit', 'Turtle']
      },
    ];

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My first ap'),
        ),
        body: Column(
          children: [
            Question(
              questions[_questionIndex],
            ),
            Answer(_answerQuestion),
            Answer(_answerQuestion),
            Answer(_answerQuestion),
          ],
        ),
      ),
    );
  }
}
