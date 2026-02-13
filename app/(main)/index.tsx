import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';
import { useAuth } from '@/lib/auth-context';
import { signOut } from '@/lib/auth';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ETHER</Text>
      <Text style={styles.welcome}>
        Welcome, {user?.displayName ?? 'User'}
      </Text>
      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 8,
    marginBottom: 8,
  },
  welcome: {
    fontSize: 18,
    color: Colors.whiteAlpha80,
    marginBottom: 40,
  },
  signOutButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.whiteAlpha20,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});
