import {Button, FlatList} from 'react-native';

import {Container, Typography, CategoryCard} from '../../components';
import {Colors} from '../../config';
import {useQuizCategories} from '../../hooks/apis/use-quiz-categories';
import styles from './styles';

const Quiz = () => {
  const {data, error, loading} = useQuizCategories();

  return (
    <Container
      scrollView={false}
      headerTitle="Hello, James"
      headerSubText="Let's test your knowledge"
      backIcon={false}>
      <Typography mT={32} size={18} bold color={Colors.darkblue}>
        Select Categories
      </Typography>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CategoryCard item={item} />}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Quiz;
