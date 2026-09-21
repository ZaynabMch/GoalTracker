import { StyleSheet } from 'react-native';

// in-line styling 
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F7FC',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 22,
    lineHeight: 23,
  },

  // Knappen til at oprette et nyt mål.
  addGoalButton: {
    backgroundColor: '#007AFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 6,
  },

  addGoalButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  list: {
    paddingTop: 12,
    paddingBottom: 30,
  },

  sectionHeader: {
    marginTop: 22,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#203354',
    marginBottom: 7,
  },

  sectionLine: {
    height: 1,
    backgroundColor: '#D8D8DC',
  },

  // Hvert mål får sit eget kort, så de ikke smelter sammen.
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E7E6EC',
  },

  goalCardContent: {
    flex: 1,
    marginRight: 14,
  },

  goalTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 7,
  },

  goalInfo: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },

  goalStatus: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },

  goalStatusCompleted: {
    color: '#25A244',
    fontWeight: '600',
  },

  // "Vis" ligger nu som en del af kortet i stedet for under målet.
  viewButton: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#F0F5FF',
  },

  viewButtonText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '600',
  },

  emptyText: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginTop: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 17,
    marginBottom: 8,
    color: '#202020',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 13,
    fontSize: 16,
  },

  extraInfoInput: {
    minHeight: 90,
  },

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },

  categoryChip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    marginRight: 8,
    marginBottom: 8,
  },

  categoryChipSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },

  categoryText: {
    fontSize: 15,
    color: '#333333',
  },

  categoryTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  saveGoalButton: {
    backgroundColor: '#007AFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },

  saveGoalButtonDisabled: {
    backgroundColor: '#B8C8DC',
  },

  saveGoalButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  // Kortet øverst på Goal Details-siden.
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E7E6EC',
  },

  detailsTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 6,
  },

  detailsCategory: {
    fontSize: 15,
    color: '#777777',
    marginBottom: 16,
  },

  detailsStatus: {
    backgroundColor: '#F1F2FA',
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 13,
  },

  detailsStatusCompleted: {
    backgroundColor: '#EAF7ED',
  },

  detailsStatusText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },

  // Her samler jeg hyppighed, tidspunkt og ekstra info.
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E7E6EC',
  },

  infoRow: {
    paddingVertical: 17,
  },

  infoLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },

  infoValue: {
    fontSize: 16,
    color: '#555555',
  },

  infoDivider: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },

  extraInfoText: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 23,
  },

  completeButton: {
    backgroundColor: '#007AFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

});