import { COLOR } from '@/constants/constantsStyles';
export const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: 
  { flex: 1, 
    padding: 20, 
    backgroundColor:  COLOR.background,

  },
  field: 
  { marginBottom: 20 

  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 8 
},
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 10, 
    fontSize: 16 
  },
  multiline: { 
    height: 80, 
    textAlignVertical: 'top' 
  },
  unitsRow: { 
    flexDirection: 'row',
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  fieldButton: {
    marginBottom: 20,
    marginHorizontal: 'auto',
    width: '80%',
  },
  unitButton: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 80, 
    minWidth: 50, 
    alignItems: 'center',
  },
  unitButtonSelected: { 
    backgroundColor: '#007bff', 
    borderColor: '#007bff' 
  },
  unitText: { 
    color: '#333' 
  },
  unitTextSelected: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  pickerWrapper: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    overflow: 'hidden', 
    justifyContent: 'center' 
  },
  picker: { 
    height: 55, 
    width: '100%' 
  },
  loadingContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 15 
  },
  helperText: { 
    fontSize: 12, 
    color: COLOR.info, 
    marginTop: 5 
  },
  clearButton: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 20, 
    marginBottom: 40 
  },
  backButton: { 
    padding: 10 
  },
  actionButton: { 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8 
  },
  cancelButton: { 
    backgroundColor: '#ccc' 
  },
  cancelText: { 
    color: '#333', 
    fontWeight: 'bold' 
  },
  okButton: { 
    backgroundColor: '#28a745' 
  },
  okText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  }
});