import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';
import { useGoogleAuth } from '@/lib/auth';

function GoogleIcon() {
  return (
    <View style={styles.googleIcon}>
      <Text style={styles.googleIconText}>G</Text>
    </View>
  );
}

export default function LoginScreen() {
  const { request, signInWithGoogle } = useGoogleAuth();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>ETHER</Text>
        <Text style={styles.subtitle}>Welcome back</Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={signInWithGoogle}
          disabled={!request}
        >
          <GoogleIcon />
          <Text style={styles.primaryButtonText}>Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={signInWithGoogle}
          disabled={!request}
        >
          <GoogleIcon />
          <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: Colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 8,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.whiteAlpha80,
    marginBottom: 40,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.background,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.whiteAlpha20,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.whiteAlpha10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  googleIconText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.white,
  },
});
