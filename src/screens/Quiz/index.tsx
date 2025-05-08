import {useState} from 'react';

import {Container, Typography} from '../../components';
import {QuizProps} from '../../config/types/navigation';
import {Colors} from '../../config';

const DifficultySelection = ({route}: QuizProps) => {
  const {id, level} = route?.params;
  console.log(id, level);

  return (
    <Container scrollView={false} headerTitle="Trivia Quiz App" backIcon>
      <Typography mT={32} mB={32} size={18} bold color={Colors.darkblue}>
        Quiz
      </Typography>
    </Container>
  );
};

export default DifficultySelection;
