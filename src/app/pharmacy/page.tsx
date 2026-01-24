'use client';

import { useState } from 'react';
import { Pill, QrCode, Search, History, Package } from 'lucide-react';

interface Medicine {
  name: string;
  quantity: number;
  available: boolean;
  dispensed: number;
}

interface Prescription {
  id: string;
  patientName: string;
  condition: string;
  medicines: Medicine[];
  status: string;
  prescribedDate: string;
  dispensedDate?: string;
  notes?: string;
}

export default function PharmacyDashboard() {
  const [activeTab, setActiveTab] = useState('retrieve');
  const [prescriptionRef, setPrescriptionRef] = useState('');
  const [currentPrescription, setCurrentPrescription] = useState<Prescription | null>(null);
  const [notes, setNotes] = useState('');
  
  const loadDispensingHistory = (): Prescription[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const historyData = localStorage.getItem('dispensedHistory');
      if (!historyData) return [];
      
      const history = JSON.parse(historyData);
      return Array.isArray(history) ? history : [];
    } catch (error) {
      console.error('Failed to load dispensing history:', error);
      return [];
    }
  };
  
  const [dispensingHistory, setDispensingHistory] = useState<Prescription[]>(loadDispensingHistory);

  const mockPrescriptions = {
    'RX001': {
      id: 'RX001',
      patientName: 'John Doe',
      condition: 'Hypertension',
      medicines: [
        { name: 'Amlodipine 5mg', quantity: 30, available: true, dispensed: 0 },
        { name: 'Lisinopril 10mg', quantity: 30, available: false, dispensed: 0 }
      ],
      status: 'pending',
      prescribedDate: '2024-01-15'
    }
  };

  const handleRetrievePrescription = () => {
    const prescription = mockPrescriptions[prescriptionRef as keyof typeof mockPrescriptions];
    if (prescription) {
      setCurrentPrescription(prescription);
    } else {
      alert('Prescription not found or expired');
    }
  };

  const handleDispense = (medicineIndex: number, quantity: number) => {
    if (currentPrescription) {
      const medicine = currentPrescription.medicines[medicineIndex];
      
      // Validate quantity
      if (quantity < 0) {
        alert('Quantity cannot be negative');
        return;
      }
      
      if (quantity > medicine.quantity) {
        alert(`Cannot dispense more than prescribed quantity (${medicine.quantity})`);
        return;
      }
      
      const updated = {
        ...currentPrescription,
        medicines: currentPrescription.medicines.map((med, idx) =>
          idx === medicineIndex ? { ...med, dispensed: quantity } : med
        )
      };
      setCurrentPrescription(updated);
    }
  };

  const handleConfirmDispensing = () => {
    if (!currentPrescription || typeof window === 'undefined') return;
    
    const hasDispensed = currentPrescription.medicines.some(med => med.dispensed > 0);
    if (!hasDispensed) {
      alert('Please dispense at least one medicine before confirming.');
      return;
    }

    try {
      const existingHistory = JSON.parse(localStorage.getItem('dispensedHistory') || '[]');
      if (!Array.isArray(existingHistory)) {
        throw new Error('Invalid history format');
      }
      
      const newItem: Prescription = {
        ...currentPrescription,
        dispensedDate: new Date().toISOString(),
        status: 'dispensed',
        notes: notes.trim() || undefined
      };
      
      const updatedHistory = [...existingHistory, newItem];
      localStorage.setItem('dispensedHistory', JSON.stringify(updatedHistory));
      setDispensingHistory(updatedHistory);
      
      // Reset state
      setCurrentPrescription(null);
      setPrescriptionRef('');
      setNotes('');
      
      alert('Prescription dispensed successfully');
    } catch (error) {
      console.error('Failed to save dispensing record:', error);
      alert('Failed to save dispensing record. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Pharmacy Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button 
            onClick={() => setActiveTab('retrieve')}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-left"
          >
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Pending Prescriptions</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-left"
          >
            <div className="flex items-center gap-3">
              <Pill className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Dispensed Today</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-left"
          >
            <div className="flex items-center gap-3">
              <History className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Total Dispensed</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex border-b" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'retrieve'}
              aria-controls="retrieve-panel"
              id="retrieve-tab"
              onClick={() => setActiveTab('retrieve')}
              className={`px-6 py-3 font-medium ${activeTab === 'retrieve' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Retrieve Prescription
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'history'}
              aria-controls="history-panel"
              id="history-tab"
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 font-medium ${activeTab === 'history' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Dispensing History
            </button>
          </div>

          <div className="p-6" role="tabpanel" id={`${activeTab}-panel`} aria-labelledby={`${activeTab}-tab`}>
            {activeTab === 'retrieve' && (
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prescription Reference Number
                    </label>
                    <input
                      type="text"
                      value={prescriptionRef}
                      onChange={(e) => setPrescriptionRef(e.target.value)}
                      placeholder="Enter reference number (e.g., RX001)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <button
                      onClick={handleRetrievePrescription}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                    >
                      <Search className="w-4 h-4" />
                      Retrieve
                    </button>
                    <button 
                      onClick={() => {
                        // Simulate QR scan - in real app would open camera
                        const mockQRData = 'RX001';
                        setPrescriptionRef(mockQRData);
                        alert('QR Code scanned: ' + mockQRData);
                      }}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2"
                    >
                      <QrCode className="w-4 h-4" />
                      Scan QR
                    </button>
                  </div>
                </div>

                {currentPrescription && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Prescription Details</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600">Patient Name</p>
                        <p className="font-medium">{currentPrescription.patientName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Medical Condition</p>
                        <p className="font-medium">{currentPrescription.condition}</p>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-3">Prescribed Medicines</h4>
                    <div className="space-y-3">
                      {currentPrescription.medicines.map((medicine: Medicine, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-4 border">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{medicine.name}</p>
                              <p className="text-sm text-gray-600">Prescribed: {medicine.quantity}</p>
                              <p className={`text-sm ${medicine.available ? 'text-green-600' : 'text-red-600'}`}>
                                {medicine.available ? 'Available' : 'Out of Stock'}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                max={medicine.quantity}
                                min="0"
                                step="1"
                                value={medicine.dispensed}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (value === '') {
                                    handleDispense(index, 0);
                                  } else {
                                    const numValue = parseInt(value, 10);
                                    if (!isNaN(numValue)) {
                                      handleDispense(index, numValue);
                                    }
                                  }
                                }}
                                className="w-20 px-2 py-1 border rounded"
                                disabled={!medicine.available}
                              />
                              <span className="text-sm text-gray-600">dispensed</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add notes for unavailable medicines..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        rows={3}
                      />
                    </div>

                    <button
                      onClick={handleConfirmDispensing}
                      className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                    >
                      Confirm Dispensing
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Dispensing History</h3>
                <div className="space-y-3">
                  {dispensingHistory.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No dispensing history yet.</p>
                  ) : (
                    dispensingHistory.map((item: Prescription, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{item.patientName}</p>
                            <p className="text-sm text-gray-600">Ref: {item.id}</p>
                            <p className="text-sm text-gray-600">Dispensed: {item.dispensedDate ? new Date(item.dispensedDate).toLocaleDateString() : 'N/A'}</p>
                            {item.notes && <p className="text-sm text-gray-600">Notes: {item.notes}</p>}
                          </div>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            Dispensed
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}