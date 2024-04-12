import { FlatList } from "react-native";
import { FILTERS } from "../../utils/filters";
import Filter from "../Filter";
import { styles } from "./style";

const Filters = ({ filter, filters, onChange }: FiltersProps) => {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.list}
    ></FlatList>
  );
};

export default Filters;
