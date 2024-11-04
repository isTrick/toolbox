import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "@/src/types/resume";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

export default function BaseDocument(props: ResumeData) {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{`${props.name}`}</Text>
          <Text>{`${props.address}`}</Text>
          <Text>{`${props.number}`}</Text>
          <Text>{`${props.email}`}</Text>
          <Text>{`${props.linkedin}`}</Text>
          <Text>{`${props.experience}`}</Text>
          <Text>{`${props.education}`}</Text>
          <Text>{`${props.skills}`}</Text>
          <Text>{`${props.achievements}`}</Text>
        </View>
      </Page>
    </Document>
  )
}