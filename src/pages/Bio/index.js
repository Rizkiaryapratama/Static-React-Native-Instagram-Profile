import React from 'react'
import more from '../../assets/iconn/more.png'
import menu from '../../assets/iconn/menu.png'
import myprofile from '../../assets/image/myprofile.jpg'
import arrowdown from '../../assets/iconn/arrowdown.png'
import plus from '../../assets/iconn/plus.png'
import grid from '../../assets/iconn/grid.png'
import user from '../../assets/iconn/user.png'

import profile1 from '../../assets/image/profile1.jpg'
import profile2 from '../../assets/image/profile2.jpg'

import home from '../../assets/iconn/hut.png'
import search from '../../assets/iconn/search.png'
import video from '../../assets/iconn/video.png'
import bag from '../../assets/iconn/bag.png'
import chat from '../../assets/iconn/chat.png'
import profile from '../../assets/iconn/user-profile.png'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  flex,
  ScrollView } from 'react-native'

const Bio = () => {
  return (
    <View style = {{flexDirection: 'column'}}>
    
      {/* header */}
      <View>
        <View style = {{ flexDirection: 'row'}}>
          <View>
            <Text style = {styles.header}>rizkiaryapratama</Text>
          </View>
          <View style = {styles.more}>
            <Image source = {more} />
          </View>
          <View style = {styles.menu}>
            <Image source = {menu} />
          </View>
        </View>
        <View style = {styles.line2}/>
      </View>

      <View>
      <ScrollView style = {{position: 'relative'}}>
        {/* profile */}
          <View style = {styles.profile}>
            <View>
              <Image source = {myprofile} style = {styles.myprofile}></Image>
            </View>
            <View style = {{flexDirection: 'column'}}>
              <View style = {styles.number}>
                <Text style = {styles.textnumber}>2</Text>
                <Text style = {styles.textnumber}>337</Text>
                <Text style = {styles.textnumber}>285</Text>
              </View>
              <View style = {styles.note}>
                <Text style = {styles.textnote}>Post</Text>
                <Text style = {styles.textnote}>Followers</Text>
                <Text style = {styles.textnote}>Following</Text>
              </View>
            </View>
          </View>
          {/* Bio */}
          <Text style = {styles.bio}>Rizki Arya Pratama</Text>
          {/* EditProfile */}
          <View style = {{flexDirection: 'row'}}>
            <View style = {styles.editbio}>
              <Text style = {styles.editprofile}>Edit Profile</Text>
            </View>
            <View style = {styles.arrowdownview}>
              <Image source = {arrowdown} style = {styles.arrowdown} ></Image>
            </View>
          </View>
          {/* story */}
          <Text style = {styles.story}>Story Highlights</Text>
          <Text style = {styles.childstory}>Keep your favourite stories on your profile</Text>
          {/* story */}
          <View style = {{flexDirection : 'row'}}>
            <View style = {styles.styleplus}>
              <Image source = {plus} style = {styles.plus}/>
              <Text style = {styles.new}>New</Text>
            </View>
            <View style = {styles.styleplus}/>
            <View style = {styles.styleplus}/>
            <View style = {styles.styleplus}/>
            <View style = {styles.styleplus}/>
          </View>
          {/* grid & user */}
          <View>
            <View style = {styles.content}>
              <View>
                <Image source = {grid}/>   
              </View>
              <View>
                <Image source = {user} />
              </View>
            </View>
            <View style = {styles.line}/>
          </View>
          {/* foto beranda */}
          <View style = {styles.beranda}>
            <View>
              <Image source = {profile1} style = {styles.profile1}/>
            </View>
            <View >
              <Image source = {profile2} style = {styles.profile2}/>
            </View>
          </View>

          <Text style = {styles.additional}>Complete your profile</Text>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {styles.additional2}>3 OF 4 </Text>
            <Text style = {styles.additional3}>COMPLETE</Text>
          </View>
          <View>
          <ScrollView style = {{flexDirection: 'row'}}>
          <View style = {styles.cyp}>
            <View style = {styles.outline}>
              <View style = {styles.addbio}>
                <Image source = {chat} style = {styles.chat}/>
              </View>
              <Text style = {styles.addbio2}>Add Bio</Text>
              <Text style = {styles.addbio3}>Tell your followers a little bit</Text>
              <Text style = {styles.addbio3}>about yourself.</Text>
              <View style = {styles.addbio4}>
                <Text style = {styles.addbio5}>Add Bio</Text>
              </View>
            </View>
            <View style = {styles.outline}>
              <View style = {styles.editname}>
                <Image source = {profile} style = {styles.userprofile} />
              </View>
              <Text style = {styles.editname2}>Add Your Name</Text>
              <Text style = {styles.editname3}>Add your full name so your</Text>
              <Text style = {styles.editname3}>friends know that it's you.</Text>
              <View style = {styles.editname4}>
                <Text style = {styles.editname5}>Edit Name</Text>
              </View>
            </View>         
          </View>
          </ScrollView>
          </View>
      </ScrollView>
      </View>
      
      <View style = {styles.footer}>
        <Image source = {home} style = {styles.footer2}/>
        <Image source = {search} style = {styles.footer2}/>
        <Image source = {video} style = {styles.footer2}/>
        <Image source = {bag} style = {styles.footer2}/>
        <View style = {styles.footer3}>
          <Image source = {myprofile} style = {styles.myprofile2}/>
        </View>
      </View>

    </View>
  )
}

export default Bio

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  footer: {
    flexDirection: 'row', 
    position: 'absolute',
    bottom: 100,
    width: 415,
    height: 45,
    borderTopWidth: 1.5,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  more: {
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 140,
    alignItems: 'flex-start'
  },
  menu: {
    marginTop: 13,
    marginLeft: 26,
  },
  myprofile: {
    marginLeft: 20,
    borderLeftWidth: 2,
    borderColor: 'black',
    marginTop: 25,
    width: 90,
    height: 90,
    borderRadius: 180/2,
    borderWidth: 1,
  },
  profile: {
    flexDirection: 'row'
  },
  number: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 46,
    marginLeft: 25,
    
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 25
  },
  textnumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 15
  },
  textnote: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginLeft: 10,
    marginRight: 15
  },
  bio: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 13,
    color: 'black',
  },
  editbio: {
    marginTop: 30,
    marginLeft:10,
    padding: 10, 
    backgroundColor: 'white', 
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    width: 330,
    height: 35
  },
  editprofile: {
    marginTop: -5,
    marginBottom: -5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  arrowdownview: {
    marginTop: 30,
    marginLeft: 10,
    padding: 10, 
    backgroundColor: 'white', 
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    width: 35,
    height: 35,      
  },
  arrowdown: {
    width: 14,
    height: 14,
  },
  story: {
    marginTop: 13,
    marginLeft: 13,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  childstory: {
    marginLeft: 13,
    fontSize: 15,
    color: 'black'
  },
  styleplus: {
    marginTop: 10,
    marginLeft: 13,
    marginRight: 18,
    padding: 10, 
    backgroundColor: 'white', 
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 57,
    width: 57,
    height: 57,
  },
  plus: {
    marginTop: 5,
    marginLeft: 5
  },
  content: {
    marginTop: 45,
    marginLeft: 13,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  new: {
    marginLeft: 2,
    marginTop: 20,
    fontWeight: '500',
    color: 'black'
  },
  line: {
    marginTop: 10,
    width: 415/2,
    height: 1.5,
    backgroundColor: 'black',
    marginBottom: 2
  },
  beranda: {
    flexDirection: 'row',
  },
  profile1: {
    height: 125,
    width: 125,
  },
  profile2: {
    height: 125,
    width: 125,
  },
  additional: {
    marginTop: 20,
    marginLeft: 13,
    color: 'black',
    fontWeight: '600',
    fontSize: 18
  },
  additional2: {
    marginLeft: 13,
    color : '#49FF00',
    fontWeight : '400'
  },
  additional3: {
    color : 'black',
    fontWeight : '400'
  },
  cyp: {
    marginBottom: 300,
    flexDirection: 'row',
  },
  outline: {
    marginTop: 10,
    marginLeft: 13,
    height: 220,
    width : 210,
    borderWidth: 1.8,
    borderColor: 'black',
    borderRadius: 6,
  },
  addbio: {
    left: 75,
    marginTop: 30,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1.5,
  },
  addbio2: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },
  addbio3: {
  textAlign: 'center',
  color: 'black'
  },
  addbio4: {
    marginTop: 20,
    left: 120/2,
    height: 30,
    width: 90,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#1597E5'
  },
  addbio5: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',

    left: 15,
    marginTop: 3
  },
  footer2: {
    marginTop: 10,
  },
  footer3: {
    marginTop: 8,
    width: 30,
    height: 30,
    borderRadius: 30/2,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  myprofile2: {
    width: 27,
    height: 27,
    borderRadius: 27/2,
  },
  editname: {
    left: 75,
    marginTop: 30,
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1.5,
  },
  editname2: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },
  editname3: {
    textAlign: 'center',
    color: 'black'
  },
  editname4: {
    marginTop: 20,
    left: 120/2,
    height: 30,
    width: 90,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'black'
  },
  editname5: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    left: 6,
    marginTop: 3
  },
  line2: {
    width: 420,
    height: 1,
    backgroundColor: 'black'
  },
  chat: {
    marginTop: 11,
    marginLeft: 11
  },
  userprofile: {
    marginTop: 11,
    marginLeft: 11,
  }
})
