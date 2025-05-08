import {useState} from 'react';
import {FlatList} from 'react-native';

import {
  Container,
  Typography,
  CategoryCard,
  StandardButton,
} from '../../components';
import {Colors} from '../../config';
import {useQuizCategories} from '../../hooks';
import styles from './styles';

const Quiz = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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
        renderItem={({item, index}) => (
          <CategoryCard
            item={item}
            index={index}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />

      <StandardButton title="Start Quiz" onPress={() => {}} mB={32} />
    </Container>
  );
};

export default Quiz;
