import { Image, ImageProps } from "react-native"
import { styles } from "./style"

const Avatar = ({selected, ...rest}: AvatarProps & ImageProps) => {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest}>
      
    </Image>
  )
}

export default Avatar
