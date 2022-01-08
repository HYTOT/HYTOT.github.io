#include <fstream>
#include <iostream>
using namespace std;

void ReadPresentation() {
  ifstream infile;
  infile.open("../../presentations/5to6/draft.md", ios::in);
  if (!infile.is_open()) {
    cout << "file open failed" << endl;
    return;
  }
  string buf;
  while (true) {
    istream& line = getline(infile, buf);
    if (!line) return;
    cout << buf << endl;
  }
}

int main() {
  ReadPresentation();
  cout << endl;
  system("pause");
  return 0;
}