import {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {Colors, Metrix, NavigationService} from '../../config';
import {QuizScreenParams} from '../../config/types/navigation';
import {Question} from '../../config/types/appDataTypes';
import {Container, Typography} from '../../components';
import {useQuizQuestions} from '../../hooks';
import {styles} from '../DifficultySelection/styles';

const DifficultySelection = ({route}: QuizScreenParams) => {
  const {id, level} = route?.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<String[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const {data = [], loading, error, getQuestions} = useQuizQuestions();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getQuestions(id.toString(), level);
    }
  }, [isFocused]);

  useEffect(() => {
    const currentQuestion: Question = data[currentIndex];
    if (data.length) {
      const options = [
        ...currentQuestion?.incorrect_answers,
        currentQuestion?.correct_answer,
      ];

      let shuffled = options
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);

      setOptions(shuffled);
    }
  }, [currentIndex, data]);

  const currentQuestion: Question = data[currentIndex];

  const handlePressOption = (item: any) => {
    setSelectedAnswer(item);
    if (item === currentQuestion?.correct_answer) {
      setScore(prev => prev + 1);
    }

    if (currentIndex < data.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1000);
    } else {
      // NavigationService.navigate('QuizResult', {
      //   score,
      //   totalQuestions: data?.length,
      // });
    }
  };

  return (
    <Container scrollView={false} headerTitle="Trivia Quiz App" backIcon>
      <Typography mT={32} size={18} bold color={Colors.darkblue}>
        Question: {currentIndex + 1}
      </Typography>

      <Typography mT={32} mB={32} size={18} bold color={Colors.darkblue}>
        {currentQuestion?.question}
      </Typography>

      {options.map((item, index) => {
        const isCorrect = currentQuestion.correct_answer;
        return (
          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={() => handlePressOption(item)}
            key={index.toString()}
            style={styles.levelSelectContainer}>
            <View
              style={[
                styles.radioButton,
                item !== selectedAnswer && {borderColor: Colors.greyV3},
              ]}>
              {item === selectedAnswer && <View style={styles.radioFill} />}
            </View>
            <Typography color={Colors.textV2} semiBold size={15}>
              {item}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
};

export default DifficultySelection;
