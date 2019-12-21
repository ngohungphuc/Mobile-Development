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
  final questions = const [
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

  var _questionIndex = 0;

  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    if (_questionIndex < questions.length) {}
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My first ap'),
        ),
        body: Column(
          children: [
            Question(
              questions[_questionIndex]['questionText'],
            ),
            ...(questions[_questionIndex]['answers'] as List<String>)
                .map((answer) {
              return Answer(_answerQuestion, answer);
            }).toList()
          ],
        ),
      ),
    );
  }
}
