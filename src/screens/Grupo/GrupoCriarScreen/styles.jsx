import { COLOR as c } from '@/constants/constantsStyles';
export const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: 
  { flex: 1, 
    padding: 20, backgroundColor: c.backgroundclr, 
    justifyContent: "center"
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
    borderColor: c.softGray, 
    borderRadius: 80, 
    minWidth: 50, 
    alignItems: 'center',
  },
  unitButtonSelected: { 
    backgroundColor: c.info, 
    borderColor: c.blue,
  },
  unitText: { 
    color: c.preto, 
  },
  unitTextSelected: { 
    color: c.branco, 
    fontWeight: 'bold' 
  },
  pickerWrapper: { 
    borderWidth: 1, 
    borderColor: c.gray, 
    borderRadius: 8, 
    overflow: 'hidden', 
    justifyContent: 'center' 
  },
  picker: { 
    height: 55, 
    width: '100%' 
  },
  helperText: { 
    fontSize: 12, 
    color: c.info, 
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
    backgroundColor: c.verde, 
  },
  okText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  }
});