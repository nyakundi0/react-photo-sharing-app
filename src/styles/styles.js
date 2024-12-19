import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#007BFF',
    marginTop: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  metricsContainer: {
    marginTop: 20,
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
  },
});
