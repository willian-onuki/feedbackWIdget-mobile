import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
  handleSendFeedback: () => void;
}

export function Button({ isLoading, handleSendFeedback }: Props) {
  return (
    <TouchableOpacity onPress={handleSendFeedback} style={styles.container}>
      {
        isLoading
          ? <ActivityIndicator
            color={theme.colors.text_on_brand_color}
          />
          : <Text style={styles.title}>Enviar Feedback</Text>
      }
    </TouchableOpacity>
  );
}
