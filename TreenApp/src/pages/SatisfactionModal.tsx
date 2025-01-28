import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface SatisfactionModalProps {
  visible: boolean;
  onClose: () => void;
}

const SatisfactionModal: React.FC<SatisfactionModalProps> = ({ visible, onClose }) => {
  const [selectedResponse, setSelectedResponse] = useState<null | keyof typeof responses>(null);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const responses: {
    최고예요: string[];
    보통이에요: string[];
    별로예요: string[];
  } = {
    최고예요: ['배송이 빨라요', '응답이 빨라요', '친절해요', 
        '상태가 설명과 같아요', '약속 시간을 잘 지켜요'
    ],
    보통이에요: ['배송이 빨라요', '응답이 빨라요', '친절해요', 
        '상태가 설명과 같아요', '약속 시간을 잘 지켜요',
        '배송이 느려요', '응답이 느려요', '친절하지 않아요'
    ],
    별로예요: ['배송이 느려요', '응답이 느려요', '친절하지 않아요'],
  };

  const toggleKeywordSelection = (keyword: string) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.includes(keyword)
        ? prevKeywords.filter((item) => item !== keyword) // 선택된 키워드를 제외
        : [...prevKeywords, keyword] // 선택된 키워드를 추가
    );
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <Text style={styles.title}>User님과의 거래는 어떠셨나요?</Text>
                <View style={styles.buttonContainer}>
                    {Object.keys(responses).map((response) => (
                    <TouchableOpacity
                        key={response}
                        style={[
                        styles.commonButtonStyle,,
                        selectedResponse === response && styles.selectedButton,
                        ]}
                        onPress={() => setSelectedResponse(response as keyof typeof responses)}
                    >
                        <Text style={[
                          styles.responseText,
                          selectedResponse === response && styles.selectedResponseText
                        ]}>
                          {response}
                        </Text>
                    </TouchableOpacity>
                    ))}
                </View>

                {/* selectedResponse가 null이 아니면 키워드 부분을 렌더링 */}
                {selectedResponse && (
                <View style={styles.keywordsContainer}>
                    <Text style={styles.subtitle}>어떤 점이 좋았나요? (다수 선택 가능)</Text>
                    <View style={styles.keywords}>
                    {responses[selectedResponse]?.map((keyword: string) => (
                        <TouchableOpacity
                        key={keyword}
                        style={[
                          styles.commonButtonStyle,
                          selectedKeywords.includes(keyword) && styles.selectedButton
                        ]}
                        onPress={() => toggleKeywordSelection(keyword)} // 키워드 선택/해제
                      >
                        <Text style={[
                          styles.responseText,
                          selectedKeywords.includes(keyword) && styles.selectedResponseText
                        ]}>
                          {keyword}
                        </Text>
                      </TouchableOpacity>
                    ))}
                    </View>
                </View>
                )}
                
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>후기 작성</Text>
                </TouchableOpacity> 
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
// 거래 응답
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 24
  },
  commonButtonStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#767676',
    backgroundColor: 'white',
    marginRight: 10,
    marginBottom:10
  },
  selectedButton: {
    borderColor: '#04AD45',
  },
  responseText: {
    color: '#767676',
  },
  selectedResponseText: {
    color: '#04AD45',
  },

// 키워드
  keywordsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginBottom: 30
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "#767676",
  },
  keywords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },





  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // 반투명 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: "#04AD45"
  },
  closeButton: {
    backgroundColor: '#04AD45',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "100%",
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default SatisfactionModal;
