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


  // Knap til at rydde søgningen og andre sekundære handlinger.
  secondaryButton: {
    backgroundColor: '#F0F5FF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },

  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '600',
  },

  disabledButtonText: {
    color: '#999999',
  },

  resultCount: {
    color: '#666666',
    fontSize: 14,
    marginTop: 14,
    marginBottom: 8,
  },

  // Kortet viser den samlede gennemførelsesprocent.
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 22,
    marginTop: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E7E6EC',
    alignItems: 'center',
  },

  progressNumber: {
    fontSize: 42,
    fontWeight: '700',
    color: '#007AFF',
  },

  progressLabel: {
    fontSize: 15,
    color: '#666666',
    marginTop: 4,
    marginBottom: 20,
  },

  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#E7E6EC',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#25A244',
    borderRadius: 10,
  },

  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E7E6EC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statNumber: {
    fontSize: 25,
    fontWeight: '700',
    color: '#203354',
  },

  statLabel: {
    fontSize: 15,
    color: '#555555',
  },

  historyContent: {
    paddingBottom: 28,
  },

  historySummary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginTop: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E7E6EC',
  },

  historyEyebrow: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#777777',
  },

  historyPercentage: {
    fontSize: 42,
    fontWeight: '700',
    color: '#4C956C',
    marginTop: 8,
  },

  historySummaryText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },

  historyTrack: {
    height: 9,
    backgroundColor: '#E8E8EC',
    borderRadius: 8,
    overflow: 'hidden',
  },

  historyFill: {
    height: '100%',
    backgroundColor: '#4C956C',
    borderRadius: 8,
  },

  historyStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  historyStat: {
    alignItems: 'center',
    flex: 1,
  },

  historyStatNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#26364A',
  },

  historyStatLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },

  reflectionCard: {
    backgroundColor: '#EDF5EF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },

  reflectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#315D43',
    marginBottom: 8,
  },

  reflectionText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#315D43',
  },

  historySectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#26364A',
    marginTop: 8,
    marginBottom: 5,
  },

  historySectionSubtitle: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 12,
  },

  historyDisabledButton: {
    opacity: 0.45,
  },
  completeButton: {
    backgroundColor: '#4C956C',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  
  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

});