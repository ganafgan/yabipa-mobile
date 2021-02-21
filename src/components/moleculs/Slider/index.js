import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors, Fonts } from '../../../utils';

const Slider = () => {
    
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)

    const data = [
        {
          title: "Aenean leo",
          body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
          imgUrl: "https://picsum.photos/id/11/200/300"
        },
        {
          title: "In turpis",
          body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
          imgUrl: "https://picsum.photos/id/10/200/300"
        },
        {
          title: "Lorem Ipsum",
          body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
          imgUrl: "https://picsum.photos/id/12/200/300"
        }
      ]

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.container} key={index}>
                <Image 
                    source={{uri: item.imgUrl}}
                    style={styles.img}
                />
                <Text style={styles.header}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        )
    }
    return (
        <View>
            <Carousel 
                layout={'stack'} layoutCardOffset={18}
                
                ref={isCarousel}
                sliderWidth={100}
                itemWidth={200}
                inactiveSlideShift={0}
                useScrollView={true}
                data={data}
                renderItem={renderItem}
                onSnapToItem={(index) => setIndex(index)}
            />
            <Pagination
                  dotsLength={data.length}
                  activeDotIndex={index}
                  carouselRef={isCarousel}
                  dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                  }}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  tappableDots={true}
                  animatedDuration={300}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderRadius: 10,
        paddingBottom: 20,
    },
    img: {
        height: 100,
        resizeMode: 'cover'
    },
    header: {
        fontSize: 20,
        fontFamily: Fonts.medium
    },
    body: {
        fontSize: 14,
        fontFamily: Fonts.regular
    }
})
