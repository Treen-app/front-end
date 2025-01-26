import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Swiper from 'react-native-swiper';

interface ProductData {
  title: string;
  price: string;
  seller: string;
  description: string;
  tags: string[];
  locations: string[];
  views: number;
  timestamp: string;
  images: any[];
  liked?: boolean;
}

const { width } = Dimensions.get('window');

const mockData: ProductData[] = Array(10).fill({
  title: '얼마 못 신은 신발',
  price: '30,000TR',
  seller: '슈퍼캡짱딩디리딩딩',
  description: '얼마 못 신은 커플신발인데 남친이 군대가서 팔아요.\n남자 290사이즈입니다.',
  tags: ['XL', 'A급', '직거래', '신발'],
  locations: ['수지구', '강남구'],
  views: 32,
  timestamp: '6분전',
  images: [
    require('../img/adidas.png'),
    require('../img/adidas2.png'),
    require('../img/adidas3.png'),
    require('../img/adidas4.png'),
  ],
});

const ProductListScreen = () => {
    const [selectedTab, setSelectedTab] = useState('추천');
    const [products, setProducts] = useState(mockData);
    const tabs = ['추천', '팔로우', '포인트', '물물교환'];
    const toggleLike = (index: number) => {
        const newProducts = [...products];
        newProducts[index] = {
        ...newProducts[index],
        liked: !newProducts[index].liked,
        };
        setProducts(newProducts);
    };

  const ProductCard = ({ item, index }: { item: ProductData; index: number })  => (
    <View style={styles.productCard}>
      <View style={styles.imageContainer} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.tagContainer}>
          {item.tags.slice(0, 3).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <View style={styles.bottomInfo}>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
          <View style={styles.viewsContainer}>
            <Text style={styles.views}>25</Text>
            <TouchableOpacity
              onPress={() => toggleLike(index)}
              style={styles.heartButton}
            >
              <AntDesign 
                name={item.liked ? "heart" : "hearto"} 
                size={17} 
                color={item.liked ? "#04AD45" : "#666666"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>50,000,000TR</Text>
        {/* <View style={styles.headerIcons}>
            <AntDesign name="search1" size={22} />
            <SimpleLineIcons name="bell" size={22} style={styles.bellIcon}/>
        </View> */}
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

      

        <ScrollView style={styles.productList}>
          {/* <View style={styles.notification}>
            <Text style={styles.notificationText}>
              트린으로 -- CM만큼 지구를 지켰어요
            </Text>
          </View> */}
          <View style={styles.notification}>
            <Swiper
                dotStyle={{
                  width: 5,
                  height: 5,
                  borderRadius: 3,
                  backgroundColor: '#DBDBDB',
                  marginHorizontal: 5,
                  marginRight: 3
                }}
                activeDotStyle={{
                  width: 5,
                  height: 5,
                  borderRadius: 3,
                  backgroundColor: '#04AD45',
                  marginRight: 3
                }}
                paginationStyle={{
                  bottom: -17,
                  alignSelf: 'flex-start', // 왼쪽 정렬
                  right: 300
                }}
                
            >
              {mockData[0].images.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={styles.productImage}
                  resizeMode="cover"
                />
              ))}
            </Swiper>
          </View>
          <Text style={styles.filterText}>최신순</Text>
          <Image source={require('../img/filter.png')} style={styles.filter}></Image>
          <View style={styles.divider} />
            {products.map((item, index) => (
                <ProductCard key={index} item={item} index={index} />
            ))}
        </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                <Entypo name="home" size={24} color="#04AD45" />
                <Text style={[styles.navText, styles.activeNavText]}>홈</Text>
                </TouchableOpacity>
                {['트린', '채팅', 'MY'].map((text, index) => (
                <TouchableOpacity key={index} style={styles.navItem}>
                    <Entypo name="cycle" size={24} color="#999" />
                    <Text style={styles.navText}>{text}</Text>
                </TouchableOpacity>
                ))}
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C853',
    paddingLeft: 16
  },
  headerIcons: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    marginLeft: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#04AD45',
  },
  tabText: {
    fontSize: 14,
    color: '#767676',
  },
  selectedTabText: {
    color: '#04AD45',
    fontWeight: 'bold',
  },
  notification: {
    backgroundColor: '#DEF7BE',
    height: 80,
    margin: 16,
    borderRadius: 10,
    flexDirection: 'row'
  },
  notificationText: {
    color: '#00C853',
    textAlign: 'center',
    fontSize: 16
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  filter:{
    width: 20,
    height: 20,
    position: 'absolute',
    right: 0,
    top: 120,
    marginHorizontal: 20,
  },
  filterText:{
    position: 'absolute',
    right: 30,
    top: 123,
    marginHorizontal: 20,
    color: '#666666',
    fontSize: 12
  },
  productList: {
    flex: 1,
  },
  productCard: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginHorizontal: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#757575',
  },
  bottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#757575',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#999',
  },
  activeNavText: {
    color: '#04AD45',
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  views: {
    fontSize: 12,
    color: '#00C853',
  },
  heartButton: {
    padding: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 35
  },
});

export default ProductListScreen;