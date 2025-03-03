import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Keyboard, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const tabs = ['포인트', '물물교환'];
  const [selectedTab, setSelectedTab] = useState('포인트');
  const categories = ["상의", "하의", "원피스", "아우터", "신발", "잡화", "키즈"];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleRemoveCategory = () => {
    setSelectedCategory(null);
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      {/* 검색창 */}
      <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="black"/>
        </TouchableOpacity>
        <View style={styles.inputAndCategoryContainer}>
            <TextInput
            style={styles.searchInput}
            placeholder="검색어를 입력하세요"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={Keyboard.dismiss}
            />
            {selectedCategory && (
            <View style={styles.selectedCategory}>
                <Text style={styles.selectedCategoryText}>{selectedCategory}</Text>
                <TouchableOpacity onPress={handleRemoveCategory} style={styles.removeButton}>
                <Text style={styles.removeText}>X</Text>
                </TouchableOpacity>
            </View>
            )}
        </View>
        <TouchableOpacity>
            <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[
              styles.tab,
              selectedTab === tab && styles.selectedTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>


      {/* 카테고리 선택 */}
      <Text style={[styles.selectedCategoryText, {paddingLeft: 24}]}>카테고리 선택</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "#fff",
  },
  inputAndCategoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB"
  },
  searchInput: {
    paddingHorizontal: 10,
    height: 40,
  },
  selectedCategory: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 10,
    paddingHorizontal: 10,
    height: 28,
  },
  selectedCategoryText: {
    fontSize: 14,
    color: "#767676",
  },
  removeButton: {
    marginLeft: 8,
  },
  removeText: {
    fontSize: 14,
    color: "#767676",
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 10,
    paddingHorizontal: 24,
  },
  categoryButton: {
    width: 70,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingTop: 50,
    paddingBottom: 8,
    alignItems: "center"
  },
  selectedButton: {
    backgroundColor: "#4caf50",
    borderColor: "#4caf50",
  },
  categoryText: {
    fontSize: 14,
  },
  selectedText: {
    color: "#fff",
  },

  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 25
  },
  tab: {
    // flex: 0.5,
    paddingVertical: 20,
    alignItems: 'center',
    width: 90
  },
  selectedTab: {
    borderBottomWidth: 2.5,
    borderBottomColor: '#04AD45',
  },
  tabText: {
    fontSize: 14,
    color: '#767676',
  },
  selectedTabText: {
    color: '#04AD45',
  },
});

export default SearchScreen;
