import React, { FC, ComponentProps } from 'react';
import { PressableProps, Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Props = Pick<PressableProps, 'onPress'> & {
  color?: string;
  name: ComponentProps<typeof FontAwesome>['name'];
  size?: number;
};

export const TabIcon: FC<Props> = ({
  color,
  name,
  size,
  onPress
}) => (
  <Pressable
    style={styles.container}
    onPress={onPress}
  >
    <FontAwesome
      name={name}
      style={{
        color: color,
        fontSize: size,
      }}
    />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white'
  }
})