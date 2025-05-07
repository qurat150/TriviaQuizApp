import {Container, Typography} from '../../components';
import {Colors} from '../../config';
import {useQuizCategories} from '../../hooks/apis/use-quiz-categories';

const Quiz = () => {
  const {data, error, loading} = useQuizCategories();

  return (
    <Container
      headerTitle="Hello, James"
      headerSubText="Let's test your knowledge"
      backIcon={false}>
      <Typography mT={32} size={18} bold color={Colors.darkblue}>
        Select Categories
      </Typography>
    </Container>
  );
};

export default Quiz;
