import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions, 
  ScrollView,
  FlatList
} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/ProductDetailScreen.styles'

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
}

// 관련 상품을 위한 새로운 인터페이스
interface RelatedProduct {
  id: string;
  image: any;
  title: string;
  price: string;
}

const { width } = Dimensions.get('window');

// 임시 데이터
const mockData: ProductData = {
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
};

// 관련 상품 더미 데이터
const relatedProducts: RelatedProduct[] = [
  {
    id: '1',
    image: require('../img/adidas.png'),
    title: '아디다스 운동화 275',
    price: '45,000TR'
  },
  {
    id: '2', 
    image: require('../img/adidas2.png'),
    title: '나이키 에어맥스 95 블랙',
    price: '89,000TR'
  },
  {
    id: '3',
    image: require('../img/adidas3.png'),
    title: '퓨마 스웨이드 클래식',
    price: '52,000TR'
  },
  {
    id: '4',
    image: require('../img/adidas4.png'),
    title: '반스 올드스쿨 화이트',
    price: '67,000TR'
  }
];

const renderTags = (items: string[], styleType: 'tag' | 'location') =>
  items.map((item, index) => (
    <View key={index} style={styleType === 'tag' ? styles.tag : styles.locationTag}>
      <Text style={styleType === 'tag' ? styles.tagText : styles.locationTagText}>{item}</Text>
    </View>
  ));

const RelatedProductItem = ({ item }: { item: RelatedProduct }) => (
  <TouchableOpacity style={styles.relatedProductItem}>
    <Image source={item.image} style={styles.relatedProductImage} />
    <Text style={styles.relatedProductTitle} numberOfLines={2}>{item.title}</Text>
    <Text style={styles.relatedProductPrice}>{item.price}</Text>
  </TouchableOpacity>
);



export default class ProductDetailScreen extends React.Component {
  state = {
    liked: false
  };
  
  // 좋아요 토글 함수
  toggleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
    // 여기에 서버로 좋아요 상태를 전송하는 API 호출을 추가할 수 있습니다
  };

  renderRelatedProducts = (title: string, data: RelatedProduct[]) => (
    <View style={styles.relatedProductsSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <RelatedProductItem item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.relatedProductsList}
      />
    </View>
  );


  render() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {/* Product Image */}
                <View style={styles.imageContainer}>
                    <Swiper
                        dotStyle={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          marginHorizontal: 3,
                        }}
                        activeDotStyle={{
                          width: 6,
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: '#04AD45',
                        }}
                        paginationStyle={{
                          bottom: 12,
                        }}
                    >
                      {mockData.images.map((image, index) => (
                        <Image
                          key={index}
                          source={image}
                          style={styles.productImage}
                          resizeMode="cover"
                        />
                      ))}
                    </Swiper>

                    {/* Heart Button */}
                    <TouchableOpacity
                      onPress={this.toggleLike}
                      style={styles.heartButton}
                    >
                      <AntDesign style={styles.heartIcon}
                        name={"heart"} 
                        size={20} 
                        color={this.state.liked ? "#FF0000" : "#666666"}
                      />
                    </TouchableOpacity>
                </View>

                {/* Product Info */}
                <View style={styles.productInfo}>
                    {/* 제목과 조회수를 같은 라인에 배치 */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.productTitle}>얼마 못 신은 신발</Text>
                        {/* <Text style={styles.viewCount}>조회수 {mockData.views}</Text> */}
                    </View>
                    <Text style={styles.price}>30,000TR</Text>
                    
                    <View style={styles.sellerInfo}>
                        <View style={styles.profileIcon} />
                        <Text style={styles.sellerName}>슈퍼캡짱딩디리딩딩</Text>
                    </View>
                    
                    <Text style={styles.description}>
                        얼마 못 신은 커플신발인데 남친이 군대가서 팔아요.{'\n'}
                        남자 290사이즈입니다.
                    </Text>
                    
                    <Text style={styles.time}>6분전</Text>

                    <View style={styles.tagContainer}>
                    {renderTags(['XL', 'A급', '직거래', '신발'], 'tag')}
                    </View>

                    <View style={styles.locationContainer}>
                        <Text style={styles.locationTitle}>거래 희망 장소</Text>
                        {renderTags(['수지구', '강남구'], 'location')}
                    </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.viewCountContainer}>
                    <Text style={styles.viewCountUnder}>조회수 {mockData.views}</Text>
                </View>

                {this.renderRelatedProducts('사용자의 다른 상품', relatedProducts)}
                {this.renderRelatedProducts('이 상품과 비슷한 상품', relatedProducts)}
            </ScrollView>

            
            
            <View style={styles.buttonContainer}>
              {/* Exchange Button */}
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>채팅</Text>
              </TouchableOpacity>
            </View>
            

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
  }
}

