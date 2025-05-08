import {StyleSheet, View} from 'react-native';

import {QuizResultParams} from '../../config/types/navigation';
import {Container, StandardButton, Typography} from '../../components';
import {NavigationService, SVGS} from '../../config';

const QuizResult = ({route}: QuizResultParams) => {
  const {score, totalQuestions} = route?.params;

  let message = 'Well Played!';
  if (score === 0) {
    message = 'Better Luck next time!';
  }
  return (
    <Container scrollView={false} headerTitle="Trivia Quiz App" backIcon>
      <View style={styles.container}>
        <SVGS.QuizSvg width={200} height={200} />
        <Typography size={28} bold>
          {message}
        </Typography>
        <Typography size={20} mT={18} medium>
          You got {score} out of {totalQuestions}!
        </Typography>
      </View>

      <StandardButton
        title="Go to Home"
        mB={32}
        onPress={() => {
          NavigationService.reset('MainNavigation');
        }}
      />
    </Container>
  );
};

export default QuizResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
