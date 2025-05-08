import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Container, Typography, StandardButton, Flex} from '../../components';
import {Colors, Metrix, NavigationService} from '../../config';
import {DifficultySelectionProps} from '../../config/types/navigation';
import {styles} from './styles';

const options = [
  {level: 'easy', label: 'Easy'},
  {level: 'medium', label: 'Medium'},
  {level: 'hard', label: 'Hard'},
];

const DifficultySelection = ({route}: DifficultySelectionProps) => {
  const id = route?.params;
  const [level, setLevel] = useState(options[0].level);

  return (
    <Container scrollView={false} headerTitle="Trivia Quiz App" backIcon>
      <View style={styles.flexContainer}>
        <View>
          <Typography mT={32} mB={32} size={18} bold color={Colors.darkblue}>
            Select Difficulty
          </Typography>

          {options.map(item => (
            <TouchableOpacity
              activeOpacity={Metrix.ActiveOpacity}
              onPress={() => setLevel(item.level)}
              key={item.level}
              style={styles.levelSelectContainer}>
              <View
                style={[
                  styles.radioButton,
                  item.level !== level && {borderColor: Colors.greyV3},
                ]}>
                {item.level === level && <View style={styles.radioFill} />}
              </View>
              <Typography color={Colors.textV2} semiBold size={15}>
                {item.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>

        <StandardButton
          title="Start Quiz"
          onPress={() => {
            NavigationService.navigate('Quiz', {
              id,
              level,
            });
          }}
          mB={32}
        />
      </View>
    </Container>
  );
};

export default DifficultySelection;
