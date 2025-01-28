import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window'); // 화면의 가로 길이를 가져옴

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollViewContainer: {
      flexGrow: 1,
      paddingBottom: 120,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      paddingHorizontal: 24,
    },
    backButton: {
      padding: 10,
    },
    backButtonText: {
      fontSize: 18,
    },
    headerTitle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600',
      marginRight: 40,
    },
    imageContainer: {
      width: screenWidth ,
      height: screenWidth  * 0.8,
      backgroundColor: '#f0f0f0',
      position: 'relative',
    },
    productImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    heartButton: {
      position: 'absolute',
      right: 15,
      bottom: 12,
    },
    heartIcon: {
      fontSize: 20,
      backgroundColor: 'white',
      padding: 8,
      borderRadius: 50,
    },
    productInfo: {
      padding: 15,
      paddingHorizontal: 24
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', // 제목과 조회수를 양쪽 끝에 배치
      alignItems: 'center',
    },
    productTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 10,
    },
    exchangeProductTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    price: {
      fontSize: 20,
      fontWeight: '400',
      marginBottom: 15,
    },
    sellerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      marginTop: 10,
    },
    exchangeSellerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    profileIcon: {
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: '#ddd',
      marginRight: 10,
    },
    sellerName: {
      fontSize: 14,
      color: '#666666'
    },
    description: {
      fontSize: 14,
      lineHeight: 24,
      marginBottom: 30,
    },
    time: {
      fontSize: 13,
      color: '#666',
      marginBottom: 20,
    },
    tagContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      // marginBottom: 20,
      // borderTopWidth: 1,
      // borderTopColor: '#eee',
      // paddingTop: 15,
    },
    tag: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 15,
      // backgroundColor: '#f8f8f8',
      marginRight: 8,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#D9D9D9'
    },
    tagText: {
      fontSize: 13,
      color: '#666666',
    },
    locationContainer: {
      flexDirection: 'row', // 수평 정렬
      alignItems: 'center', // 세로 중앙 정렬
      // borderTopWidth: 1,
      // borderTopColor: '#eee',
      paddingTop: 15,
      marginBottom: 10,
    },
    locationTitle: {
      fontSize: 15,
      marginBottom: 10,
      marginRight: 10, 
    },
    locationTags: {
      flexDirection: 'row', // 구들을 수평으로 배치
      flexWrap: 'wrap', // 내용이 넘치면 다음 줄로 넘어가도록 설정
    },
    locationTag: {
      paddingHorizontal: 12, // 태그에 적당한 여백을 추가하여 버튼처럼 보이게
      paddingVertical: 6, // 태그에 적당한 여백을 추가하여 버튼처럼 보이게
      borderRadius: 15,
      // backgroundColor: '#f8f8f8',
      marginRight: 8,
      marginBottom: 8,
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: '#D9D9D9'
    },
    locationTagText: {
      fontSize: 13,
      color: '#666666'
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
    buttonContainer: {
      position: 'absolute',
      alignItems: 'center',
      bottom: 90,
      left: 15,
      right: 15,
      // width: screenWidth * 0.8
    },
    button: {
      backgroundColor: '#04AD45', // 원하는 색상으로 변경 가능
      height: 45,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: screenWidth * 0.75
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    viewCount: {
      bottom: 7,
      fontSize: 13,
      color: '#666',
    },
    exchangeViewCount: {
      bottom: 3,
      fontSize: 13,
      color: '#666',
    },
    exchangeInfo: {
      position: 'relative', // 텍스트를 이미지 위에 배치할 수 있도록 설정
      // justifyContent: 'center',
      // alignItems: 'center',
      width: 100, // 컨테이너의 크기를 이미지와 동일하게 설정
      height: 50,
      bottom: 3,
      // marginBottom: 5,
      flexDirection: 'row',
      marginTop:5
    },
    exchangeIcon: {
      width: '60%', // 컨테이너에 맞게 이미지 크기 조정
      height: '70%',
      resizeMode: 'contain',
      marginRight: 10
    },
    overlayText: {
      position: 'absolute', // 이미지 위에 겹치도록 설정
      color: '#04AD45',
      fontSize: 11, 
      textAlign: 'center', 
      left: 11,
      top: 12
    },
    exchangeIconGray: {
      width: '35%', // 컨테이너에 맞게 이미지 크기 조정
      height: '35%',
      resizeMode: 'contain',
      top: 8,
    },
    colorIcon: {
      width: 18,
      height: 18,
      borderRadius: 20,
      backgroundColor: '#ddd',
      top: 8,
    },
    divider: {
      height: 1,
      backgroundColor: '#EEEEEE',
      marginHorizontal: 24,
      marginBottom: 10
    },
    viewCountContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 24,
      marginBottom: 12,
    },
    viewCountUnder: {
      fontSize: 13,
      color: '#999999',
    },



    relatedProductsSection: {
      marginTop: 20,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 12,
      color: '#333',
    },
    relatedProductsList: {
      paddingVertical: 8,
    },
    relatedProductItem: {
      width: screenWidth * 0.35,
      marginRight: 12,
    },
    relatedProductImage: {
      width: '100%',
      height: screenWidth * 0.35,
      borderRadius: 8,
      backgroundColor: '#f5f5f5',
    },
    relatedProductTitle: {
      marginTop: 8,
      fontSize: 15,
      color: '#333',
    },
    relatedProductPrice: {
      marginTop: 4,
      fontSize: 12,
      fontWeight: '600',
      color: '#222',
    },
  });
  
  export default styles;