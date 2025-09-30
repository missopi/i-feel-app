import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    position: 'relative',
    backgroundColor: '#fff',
  },

  // home screen
  button: {
    width: 325,
    height: 100,
    borderRadius:12,
    backgroundColor: '#22aefe',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // for android
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
});