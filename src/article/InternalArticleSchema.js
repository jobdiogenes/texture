import { DocumentSchema } from 'substance'
import InternalArticleDocument from './InternalArticleDocument'
import {
  Article, ArticleRef, Body, Metadata, Award, Group, Organisation, Person, Keyword, Subject, Abstract,
  BlockFormula, BlockQuote, Figure, FigurePanel, Footnote, Heading, List, ListItem, Preformat, Paragraph,
  Table, TableFigure, TableRow, TableCell, Reference, BookRef, ChapterRef, ConferencePaperRef, DataPublicationRef,
  JournalArticleRef, MagazineArticleRef, NewspaperArticleRef, ReportRef, PatentRef, Permission, SoftwareRef,
  ThesisRef, WebpageRef, RefContrib, UnsupportedNode, UnsupportedInlineNode, Graphic, InlineGraphic,
  Bold, Italic, Subscript, Superscript, Monospace, Overline, Underline, Smallcaps, StrikeThrough, Break,
  ExternalLink, InlineFormula, Xref, SupplementaryFile, CustomMetadataField,
  ArticleTitleTranslation, ArticleAbstractTranslation
} from './models'

export default new DocumentSchema({
  name: 'TextureInternalArticle',
  version: '0.1.0',
  DocumentClass: InternalArticleDocument,
  // ATTENTION: while we have found a solution for defaultTextType of a container
  // this is still necessary because there are more places where schema.getDefaultTextType()
  // is used
  // TODO: try to eliminate this
  defaultTextType: 'paragraph',
  nodes: [
    Abstract,
    Article,
    ArticleAbstractTranslation,
    ArticleRef,
    ArticleTitleTranslation,
    Award,
    BlockFormula,
    BlockQuote,
    Body,
    Bold,
    BookRef,
    Break,
    ChapterRef,
    ConferencePaperRef,
    CustomMetadataField,
    DataPublicationRef,
    ExternalLink,
    Figure,
    FigurePanel,
    Footnote,
    Group,
    Graphic,
    Heading,
    InlineFormula,
    InlineGraphic,
    Italic,
    JournalArticleRef,
    Keyword,
    List,
    ListItem,
    MagazineArticleRef,
    Metadata,
    Monospace,
    NewspaperArticleRef,
    Organisation,
    Overline,
    PatentRef,
    Paragraph,
    Permission,
    Person,
    Preformat,
    RefContrib,
    Reference,
    ReportRef,
    Smallcaps,
    SoftwareRef,
    StrikeThrough,
    Subject,
    Subscript,
    Superscript,
    SupplementaryFile,
    Table,
    TableCell,
    TableFigure,
    TableRow,
    ThesisRef,
    Underline,
    UnsupportedInlineNode,
    UnsupportedNode,
    WebpageRef,
    Xref
  ]
})
