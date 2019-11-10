import csv

with open('StateSchoolType.csv', 'r') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    states = []
    states_2 = []
    prev_state = "PW"
    for row in spamreader:
        if prev_state != row[0]:
            print("\
             </rdf:Bag>\
            </ns1:schooltype>\
            </rdf:Description>")
            prev_state = row[0]
        if row[0] not in states:
            states.append(row[0])
            print("\
   <rdf:Description rdf:about=\"http://www.krishna-arjun.org/#{}\">\
      <rdf:type rdf:resource=\"http://www.krishna-arjun.org/class#state\" />\
      <ns1:schooltype>\
         <rdf:Bag>\
            ".format(row[0].strip()))

        print("<rdf:li>\
           <ns1:{}>\
              <ns1:NoOfStudents>{}</ns1:NoOfStudents>\
              <ns1:Disbursement>{}</ns1:Disbursement>\
           </ns1:{}>\
        </rdf:li>".format(row[1], row[2], row[3], row[1]))
print("\
 </rdf:Bag>\
</ns1:schooltype>\
</rdf:Description>")
